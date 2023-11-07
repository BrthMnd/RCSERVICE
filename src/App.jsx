import { Index } from "./pages/";
import Blog from "./pages/blogs"
import "./assets/style/style.scss";
import "./assets/js/CloseModal";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}  />
        <Route path="/ayuda" element={<Blog />}  />
      </Routes>
    </>
  );
}

export default App;
