// React-router-dom
import { Outlet, ScrollRestoration } from "react-router-dom";

// Components;
import Footer from "../components/Footer";
import Header from "../components/Header";
import LockScrollOnLoading from "../components/LockScrollOnLoading";

export default function MainLayout() {
  return (
    <>
      <LockScrollOnLoading />

      <Header />
      <Outlet />
      <Footer />

      <ScrollRestoration />
    </>
  );
}
