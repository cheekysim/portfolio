import "./assets/css/App.css";
import { Hero } from "./components/Hero";
import { Langcards } from "./components/Langcards";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontSize: "1.5rem",
          },
        }}
      />
      <Hero />
      <Langcards />
    </>
  );
}

export default App;
