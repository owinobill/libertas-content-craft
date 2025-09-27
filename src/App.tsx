import { BrowserRouter, Routes, Route } from "react-router-dom";

const SimpleHome = () => {
  console.log('SimpleHome rendering...');
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      <h1>Simple Home Page</h1>
      <p>Basic routing is working!</p>
    </div>
  );
};

const App = () => {
  console.log('App rendering...');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleHome />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
