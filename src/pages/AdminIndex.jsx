/* eslint-disable react/prop-types */
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HeaderAndAside } from "./templates";
import ModalG from "../components/Modals";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { ChangeLocation } from "../features/button/buttonAdd.slice";
import { LogOut } from "./Session/LogOut";

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
					<Route path="/:table" element={<></>}></Route>
					<Route
						path="/login"
						element={<Navigate to="/"></Navigate>}
					></Route>
					<Route
						path="/log-out"
						element={<LogOut setsesion={setsesion}></LogOut>}
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
