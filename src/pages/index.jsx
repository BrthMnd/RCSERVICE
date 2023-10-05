import { useEffect, useState } from "react";
import axios from "axios";
import { UserIndex } from "./UserIndex";
import { getSesion } from "../utils/Functions";
import { AdminIndex } from "./AdminIndex";
import { SesionIndex } from "./SesionIndex";

export function Index() {
	const [sesion, setsesion] = useState(undefined);
	const [rol, setrol] = useState("");
	let api = import.meta.env.VITE_API_URL;
	let rolAdmin = import.meta.env.VITE_ADMIN_SESION_NAME;
	useEffect(() => {
		document.title = "Inicio";
		if (!sesion) {
			setsesion(getSesion());
		} else {
			if (sesion !== "null") {
				axios
					.get(api + "/users/email/" + sesion)
					.then((response) => {
						setrol(response.data.rol.nombreRol);
					})
					.catch((error) => {
						console.error("Error:", error);
					});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sesion]);

	if (!sesion) {
		return <div className="spinner"></div>;
	}

	if (sesion==="null") {
		return <SesionIndex setsesion={setsesion}></SesionIndex>
	}

	if (rol === rolAdmin) {
		return <AdminIndex setsesion={setsesion}></AdminIndex>;
	} else {
		return <UserIndex setsesion={setsesion}></UserIndex>;
	}
}
