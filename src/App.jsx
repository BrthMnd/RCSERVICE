import { Index } from "./pages/";
import "./assets/style/style.scss";
import "./assets/js/CloseModal";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Users/LoginForm.routes";
import Register from "./pages/Users/RegisterForm.routes";
import { ProtectedRoute } from "./pages/ProtedteRoute";
import { IconLoading } from "./Utils/IconsLoading";
function App() {
  
  return (
    <>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path={"/*"} element={<Index />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
