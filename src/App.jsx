import './App.css';
import {
  Home,
  About,
  Menu,
  Contact,
  Blog,
  Register,
  BookTable,
  NotFound,
} from './Pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<BookTable />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
