// React-router-dom
import { Outlet } from "react-router-dom";

// Components;
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      {/* <main> */}
        <Outlet />
      {/* </main> */}
      <Footer />
    </>
  );
}
