import "./assets/css/App.css";
import { Hero } from "./components/Hero";
import { Langcards } from "./components/Langcards";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Hero />
      <Langcards />
    </>
  );
}

export default App;
