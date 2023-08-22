import { Route, Routes } from "react-router-dom";
import { OffersRoutes } from "./Offers";
import { PropertyRoutes } from "./Property";
import { HeaderAndAside } from "./templates";
import { Home } from "./templates/Home.routes";
import { ModalPost } from "../components/Modals/Forms/Offers/offers.modal";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí podrías realizar cualquier otra lógica necesaria para inicializar el estado
  }, [dispatch]);

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

  useEffect(() => {
    console.log("modalStatus changed:", modalStatus);
  }, [modalStatus]);

  return (
    <div className="content-wrapper" id="Content-global">
      {modalStatus && <ModalPost />}
      {children}
    </div>
  );
};
