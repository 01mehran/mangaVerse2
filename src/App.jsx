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
import { searchedMangasResults } from "./services/searchedResults.loader";

// MainLayout;
import MainLayout from "./layouts/MainLayout";

// components;
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ErrorMsg from "./components/ErrorMsg";

// Pages;
import Home from "./pages/Home";
import MangaDetails from "./pages/MangaDetails";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    HydrateFallback: Loading,

    children: [
      {
        path: "/",
        loader: topMangaList,
        element: <Home />,
        errorElement: <ErrorMsg />,
      },
      {
        path: "/manga/:id",
        loader: mangaDetailsLoader,
        element: <MangaDetails />,
        errorElement: <ErrorMsg />,
      },
      {
        path: "/search",
        loader: searchedMangasResults,
        element: <SearchResults />,
        errorElement: <ErrorMsg />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
