import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About.jsx";
import Cipher from "./Cipher.jsx";
import Team from "./Team/Team.jsx";
import Event from "./Events/Event.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Cipher></Cipher>,
  },
  {
    path: "/team",
    element: <Team></Team>,
  },
  {
    path: "/event",
    element: <Event></Event>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
