// React-router-dom;
import { Route, Routes } from "react-router-dom";

// components;
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages;
import Home from "./pages/Home";
import MangaDetails from "./pages/MangaDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
