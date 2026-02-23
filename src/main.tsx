import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayerProvider } from "./context/PlayerContext";

createRoot(document.getElementById("root")!).render(
  <PlayerProvider>
    <App />
  </PlayerProvider>
);
