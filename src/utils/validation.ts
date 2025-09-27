import { z } from 'zod';

// Input validation schemas for enhanced security
export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name cannot be empty" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s\-'\.]+$/, { message: "Name contains invalid characters" }),
  
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .refine((email) => !email.includes('<script'), { message: "Invalid email format" }),
  
  company: z.string()
    .trim()
    .max(200, { message: "Company name must be less than 200 characters" })
    .optional(),
  
  subject: z.string()
    .trim()
    .min(1, { message: "Subject cannot be empty" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" })
    .refine((msg) => !msg.includes('<script'), { message: "Invalid message content" })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// URL validation for external links
export const validateURL = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Sanitize user input for display
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Validate phone numbers
export const phoneSchema = z.string()
  .regex(/^\+?[\d\s\-\(\)]{10,20}$/, { message: "Invalid phone number format" });

// Rate limiting helper
export const createRateLimiter = (maxRequests: number, windowMs: number) => {
  const requests = new Map<string, number[]>();
  
  return (identifier: string): boolean => {
    const now = Date.now();
    const userRequests = requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    requests.set(identifier, validRequests);
    return true;
  };
};

// Client-side rate limiter for forms (5 submissions per 10 minutes)
export const contactFormRateLimit = createRateLimiter(5, 10 * 60 * 1000);