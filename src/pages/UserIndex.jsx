/* eslint-disable react/prop-types */
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { OffersRoutes } from "./Offers";
import { PropertyRoutes } from "./Property";
import { HeaderAndAside } from "./templates";
import { Home } from "./templates/Home.routes";
import { ServicesRoutes } from "./Services/index";
import { ProviderRoutes } from "./Providers";
import ModalG from "../components/Modals";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { ChangeLocation } from "../features/button/buttonAdd.slice";
import NotFound from "./NotFound";
import { LogOut } from "./Session/LogOut";

export const UserIndex = ({ setsesion }) => {
	let location = useLocation();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(ChangeLocation(location.pathname));
	}, [location, dispatch]);

	return (
		<>
			<HeaderAndAside logged={true} />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/ofertas/*" element={<OffersRoutes />} />
					<Route path="/inmuebles/*" element={<PropertyRoutes />} />
					<Route path="/servicios/*" element={<ServicesRoutes />} />
					<Route path="/proveedores/*" element={<ProviderRoutes />} />
					<Route
						path="/show/usuarios"
						element={<Navigate to="/"></Navigate>}
					></Route>
					<Route
						path="/login"
						element={<Navigate to="/"></Navigate>}
					></Route>
					<Route
						path="/log-out"
						element={<LogOut setsesion={setsesion}></LogOut>}
					></Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</>
	);
};
const Container = ({ children }) => {
	return (
		<>
			<div className="content-wrapper" id="Content-global">
				{children}
			</div>
			<ModalG />
		</>
	);
};
