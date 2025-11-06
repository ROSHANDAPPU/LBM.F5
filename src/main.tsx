import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./fonts.css";

// Restore the intended URL after redirect
if (sessionStorage.redirect) {
  const redirectUrl = new URL(sessionStorage.redirect);
  sessionStorage.removeItem('redirect');
  if (redirectUrl.pathname !== window.location.pathname) {
    window.history.replaceState(null, '', redirectUrl.pathname);
  }
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/LBM.F5/">
    <App />
  </BrowserRouter>
);
