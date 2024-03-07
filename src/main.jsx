import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import BaleSuk from "./pages/BaleSuk.jsx";
import OfferDetails from "./pages/OfferDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/balesuk", element: <BaleSuk /> },
  { path: "/balesuk/offer", element: <OfferDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
