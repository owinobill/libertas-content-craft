import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const FormValidator = () => {
  useEffect(() => {
    // Enhanced form validation and security
    const validateForms = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach((form, index) => {
        // Add novalidate to prevent browser validation conflicts
        if (!form.hasAttribute('novalidate')) {
          form.setAttribute('novalidate', 'true');
        }

        // Add CSRF protection simulation
        if (!form.querySelector('input[name="csrf_token"]')) {
          const csrfToken = document.createElement('input');
          csrfToken.type = 'hidden';
          csrfToken.name = 'csrf_token';
          csrfToken.value = Math.random().toString(36).substring(2, 15);
          form.appendChild(csrfToken);
        }

        // Enhanced input validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input) => {
          if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
            // Add required attribute validation
            if (input.hasAttribute('required') && !input.getAttribute('aria-required')) {
              input.setAttribute('aria-required', 'true');
            }

            // Add input event listeners for real-time validation
            input.addEventListener('input', (e) => {
              const target = e.target as HTMLInputElement | HTMLTextAreaElement;
              const value = target.value;

              // Real-time security validation
              const suspiciousPatterns = [
                /<script/gi,
                /javascript:/gi,
                /vbscript:/gi,
                /onload=/gi,
                /onerror=/gi
              ];

              const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(value));
              
              if (hasSuspiciousContent) {
                target.setCustomValidity('Input contains invalid content');
                target.style.borderColor = '#ef4444';
                logger.warn('Suspicious input detected in form field');
              } else {
                target.setCustomValidity('');
                target.style.borderColor = '';
              }

              // Length validation
              const maxLength = target.getAttribute('maxlength');
              if (maxLength && value.length > parseInt(maxLength)) {
                target.setCustomValidity(`Maximum length is ${maxLength} characters`);
              }

              // Email validation enhancement
              if (target.type === 'email' && value) {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(value)) {
                  target.setCustomValidity('Please enter a valid email address');
                } else {
                  target.setCustomValidity('');
                }
              }
            });

            // Add focus/blur events for better UX
            input.addEventListener('focus', () => {
              const label = form.querySelector(`label[for="${input.id}"]`) as HTMLLabelElement;
              if (label) {
                label.style.color = 'hsl(var(--primary))';
              }
            });

            input.addEventListener('blur', () => {
              const label = form.querySelector(`label[for="${input.id}"]`) as HTMLLabelElement;
              if (label) {
                label.style.color = '';
              }
            });
          }
        });

        // Form submission validation
        form.addEventListener('submit', (e) => {
          const formData = new FormData(form);
          let hasErrors = false;

          // Check all required fields
          inputs.forEach((input) => {
            if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
              if (input.hasAttribute('required') && !input.value.trim()) {
                input.setCustomValidity('This field is required');
                hasErrors = true;
              }
            }
          });

          // Validate CSRF token exists
          const csrfToken = formData.get('csrf_token');
          if (!csrfToken) {
            logger.error('CSRF token missing from form submission');
            e.preventDefault();
            return;
          }

          if (hasErrors) {
            e.preventDefault();
            logger.warn('Form validation failed');
          } else {
            logger.debug('Form validation passed');
          }
        });
      });
    };

    // Run validation setup
    validateForms();

    // Re-run when new forms are added to DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes);
          const hasNewForms = addedNodes.some(node => 
            node instanceof HTMLElement && 
            (node.tagName === 'FORM' || node.querySelector('form'))
          );
          
          if (hasNewForms) {
            setTimeout(validateForms, 100);
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};