/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Route, Routes, useLocation } from "react-router-dom";
import { OffersRoutes } from "./Offers";
import { PropertyRoutes } from "./Property";
import { HeaderAndAside } from "./templates";
import { Home } from "./templates/Home.routes";
import { ServicesRoutes } from "./Services/index";
import { ProviderRoutes } from "./Providers";
import ModalG from "../components/Modals";
import { useEffect, useState } from "react";
import { UsersRoutes } from "./Users";

import { useDispatch, useSelector } from "react-redux";
import { ChangeLocation } from "../features/button/buttonAdd.slice";

export const Index = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ChangeLocation(location.pathname));
  }, [location, dispatch]);

  return (
    <>
      <HeaderAndAside />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas/*" element={<OffersRoutes />} />
          <Route path="/inmuebles/*" element={<PropertyRoutes />} />
          <Route path="/servicios/*" element={<ServicesRoutes />} />
          <Route path="/proveedores/*" element={<ProviderRoutes />} />
        </Routes>
      </Container>
    </>
  );
};
const Container = ({ children }) => {
  const { reload } = useSelector((state) => state.modal);
  const [reloading, setReloading] = useState(1);
  useEffect(() => {
    setReloading(reloading + 1);
  }, [reload]);
  return (
    <>
      <div key={reloading} className="content-wrapper" id="Content-global">
        {children}
      </div>
      <ModalG />
    </>
  );
};
