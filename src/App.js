import "./App.css";
import Intro from "./pages/Intro/Intro";
import JokeSection from "./pages/JokeSection/JokeSection";
import Footer from "./pages/Footer/Footer";
import BookSearch from "./pages/BookSearch/BookSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/jokes" element={<JokeSection />}></Route>
            <Route path="/footer" element={<Footer />}></Route>
            <Route path="/book-search" element={<BookSearch />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
