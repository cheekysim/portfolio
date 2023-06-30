import "./assets/css/App.css";
import { Hero } from "./components/Hero";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Hero />
    </>
  );
}

export default App;
