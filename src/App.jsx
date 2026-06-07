// React-router-dom;
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// APIs;
import { topMangaList } from "./services/topMangas.loader";
import { mangaDetails as mangaDetailsLoader } from "./services/mangaDetails.loader";

// MainLayout;
import MainLayout from "./layouts/MainLayout";

// components;
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

// Pages;
import Home from "./pages/Home";
import MangaDetails from "./pages/MangaDetails";
import SearchResults from "./pages/SearchResults";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    HydrateFallback: Loading,

    children: [
      {
        path: "/",
        loader: topMangaList,
        element: <Home />,
      },
      {
        path: "/manga/:id",
        loader: mangaDetailsLoader,
        element: <MangaDetails />,
      },
      { path: "/search", element: <SearchResults /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
