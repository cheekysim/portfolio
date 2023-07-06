import "./assets/css/App.css";
// import { Hero } from "./components/Hero";
// import { Langcards } from "./components/Langcards";
import { HTMLParser } from "./components/HTMLParser";
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
      {/* <Hero />
      <Langcards /> */}
      <HTMLParser
        html={
          "<p>Hello, World!</p><p>I'm a typewriter.</p><p>How are you?</p><ul><li>A</li><li>B</li></ul>"
        }
      />
    </>
  );
}

export default App;
