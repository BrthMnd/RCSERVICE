/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { OffersRoutes } from "./Offers";
import { PropertyRoutes } from "./Property";
import { HeaderAndAside } from "./templates";
import { Home } from "./templates/Home.routes";
import ModalG from "../components/Modals";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
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
  // const modal = useSelector((state) => state.modals.status);

  return (
    <>
      <div className="content-wrapper" id="Content-global">
        {children}
      </div>
      <ModalG />
    </>
  );
};
