/* eslint-disable react/prop-types */
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HeaderAndAside } from "./templates";
import ModalG from "../components/Modals";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { ChangeLocation } from "../features/button/buttonAdd.slice";
import { LogOut } from "./Session/LogOut";
import { AdminHome } from "./Admin/AdminHome";
import { AdminAddResource } from "./Admin/AdminAddResource";
import { AdminEditResource } from "./Admin/AdminEditResource";
import { AdminGestionatePermisions } from "./Admin/AdminGestionatePermisions";

export const AdminIndex = ({ setsesion }) => {
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
					<Route
						path="*"
						element={<Navigate to="/show/usuarios"></Navigate>}
					></Route>
					<Route
						path="/login"
						element={<Navigate to="/"></Navigate>}
					></Route>
					<Route
						path="/log-out"
						element={<LogOut setsesion={setsesion}></LogOut>}
					></Route>
					<Route
						path="show/:table"
						element={<AdminHome></AdminHome>}
					></Route>
					<Route
						path="/add/:resource"
						element={<AdminAddResource></AdminAddResource>}
					></Route>
					<Route
						path="/edit/:resource/:id"
						element={<AdminEditResource></AdminEditResource>}
					></Route>
					<Route
						path="/gestionate/permisos/:id"
						element={
							<AdminGestionatePermisions></AdminGestionatePermisions>
						}
					></Route>
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
