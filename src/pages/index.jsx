import { Route, Routes } from "react-router-dom";
import { OffersRoutes } from "./Offers";
import { PropertyRoutes } from "./Property";
import { HeaderAndAside } from "./templates";
import { Home } from "./templates/Home.routes";
import { ModalPost } from "../components/Modals/Forms/Offers/offers.modal";

import { useSelector } from "react-redux";
export const Index = () => {
  return (
    <>
      <HeaderAndAside />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas/*" element={<OffersRoutes />} />
          <Route path="/inmuebles/*" element={<PropertyRoutes />} />
        </Routes>
      </Container>
    </>
  );
};
const Container = ({ children }) => {
  const modalStatus = useSelector((state) => state.modals.status);
  console.log(modalStatus);
  return (
    <div className="content-wrapper" id="Content-global">
      {modalStatus && <ModalPost />}
      {children}
    </div>
  );
};
