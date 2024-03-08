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

import DembegnaPost from "./pages/DembegnaPost.jsx";
import { DembegnaOrder } from "./pages/DembegnaOrder.jsx";
import DembegnaAccount from "./pages/DembegnaAccount.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },

  { path: "/balesuk", element: <BaleSuk /> },
  { path: "/balesuk/offer", element: <OfferDetails /> },

  { path: "/dembegnapost", element: <DembegnaPost /> },
  { path: "/dembegnaorders", element: <DembegnaOrder /> },
  { path: "/dembegnaaccount", element: <DembegnaAccount /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
