import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componets/navbar/navbar';
import Footer from './componets/footer/footer';

import Home from './pages/home/home';
import Courses from './pages/Courses/courses';
import Registeration from './pages/registration/Registeration';
import About from './pages/About/About';
import Contact from './pages/contact/conatct';

// 🔐 Admin Components
import AdminLogin from './componets/AdminLogin';
import AdminDashboard from './componets/AdminDashBoard';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar and Footer can be hidden on Admin pages if needed */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registration" element={<Registeration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🔐 Admin Panel Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
