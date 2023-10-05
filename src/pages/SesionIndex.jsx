/* eslint-disable react/prop-types */
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HeaderAndAside } from "./templates";
import ModalG from "../components/Modals";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { ChangeLocation } from "../features/button/buttonAdd.slice";
import Login from "./Session/Login";
import Register from "./Session/Register";
import PasswordRecovery from "./Session/PasswordRecovery";

// eslint-disable-next-line no-unused-vars
export const SesionIndex = (props) => {
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
					<Route
						path="*"
						element={<Navigate to="/login"></Navigate>}
					></Route>
					<Route
						path="/login"
						element={<Login setsesion={props.setsesion}></Login>}
					></Route>
					<Route
						path="/password-recovery"
						element={<PasswordRecovery></PasswordRecovery>}
					></Route>
					<Route
						path="/register"
						element={<Register setsesion={props.setsesion}></Register>}
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
