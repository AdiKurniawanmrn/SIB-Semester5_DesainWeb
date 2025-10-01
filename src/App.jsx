import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Component/home";
import Book from "./Component/Pages/Book/book";
import Login from "./Component/Pages/Auth/Login/login";
import Register from "./Component/Pages/Auth/Register/register";
import Team from "./Component/Pages/Team/team";
import Header from "./Component/Pages/Header/header";
import Footer from "./Component/Pages/Footer/footer";
import Contact from "./Component/Pages/Contact/contact";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          {/* Header selalu tampil */}
          <Header />

          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Book />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

          {/* Footer selalu tampil */}
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
