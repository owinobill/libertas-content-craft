import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

console.log('main.tsx loaded');

// Absolute minimal test
const TestApp = () => {
  console.log('TestApp rendering');
  return <div style={{backgroundColor: 'red', color: 'white', padding: '50px', fontSize: '24px'}}>MINIMAL TEST - IF YOU SEE THIS, REACT WORKS!</div>;
};

console.log('About to create root');
const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log('Root created, about to render');
  root.render(
    <StrictMode>
      <TestApp />
    </StrictMode>
  );
  console.log('Render called');
} else {
  console.error('Root element not found!');
}
