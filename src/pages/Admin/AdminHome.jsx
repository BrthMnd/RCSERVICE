/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import deleteIcn from "../../assets/img/icons/delete-icon.svg";
import editIcn from "../../assets/img/icons/edit-icon.svg";
import gestionateIcn from "../../assets/img/icons/gestionate-icon.svg";
import addtIcn from "../../assets/img/icons/add-icon.svg";
import opttIcn from "../../assets/img/icons/options-icon.svg";
import { getSesion } from "../../utils/Functions";
import ModalQuestion from "../../components/Modals/SimpleModalQuestion";

export function AdminHome() {
	const [sesion, setsesion] = useState("nothing");
	const [rol, setrol] = useState("");
	let rolAdmin = import.meta.env.VITE_ADMIN_SESION_NAME;
	let { table } = useParams();
	const navigate = useNavigate();
	const [tabledata, settabledata] = useState([]);
	const [decidiendo, setdecidiendo] = useState(undefined);
	const [editingRow, setEditingRow] = useState(null);
	let api = import.meta.env.VITE_API_URL;

	useEffect(() => {
		if (sesion === "nothing") {
			setsesion(getSesion());
		} else {
			axios
				.get(api + "/users/email/" + sesion)
				.then((response) => {
					setrol(response.data.rol.nombreRol);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sesion]);

	if (!["usuarios", "roles", "permisos"].includes(table)) {
		navigate("/error");
	}
	const [selectedTable, setSelectedTable] = useState(
		table ? table : "usuarios"
	);

	function handleAdd() {
		switch (selectedTable) {
			case "usuarios":
				navigate("/add/usuarios");
				break;
			case "roles":
				navigate("/add/roles");
				break;
			case "permisos":
				navigate("/add/permisos");
				break;
			default:
				break;
		}
	}

	const handleButtonClick = (table) => {
		if (selectedTable !== table) {
			settabledata([]);
			setSelectedTable(table);
		}
	};

	const handleEditClick = (row) => {
		if (editingRow) {
			setEditingRow(null);
		} else {
			setEditingRow(row);
		}
	};

	function getData() {
		if (selectedTable === "usuarios") {
			axios
				.get(api + "/users/")
				.then((response) => {
					settabledata(response.data);
					// console.log(response.data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		} else if (selectedTable === "roles") {
			axios
				.get(api + "/admin-rol/lista-roles-usuarios")
				.then((response) => {
					settabledata(response.data);
					// console.log(response.data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		} else if (selectedTable === "permisos") {
			axios
				.get(api + "/admin-rol/lista-permisos-usuarios")
				.then((response) => {
					settabledata(response.data);
					// console.log(response.data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	}

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedTable]);

	useEffect(() => {
		if (tabledata === undefined) {
			getData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tabledata]);

	if (sesion === "nothing" || rol === "") {
		return (
			<div className="container">
				<div className="spinner"></div>
			</div>
		);
	}

	if (!sesion) {
		return <Navigate to="/"></Navigate>;
	}

	if (rol === rolAdmin) {
		return (
			<div className="container">
				<div className="table-container">
					<ul className="table-header">
						<li>
							<button
								onClick={() => handleButtonClick("usuarios")}
								className={
									selectedTable === "usuarios"
										? "selected"
										: ""
								}
							>
								Usuarios
							</button>
						</li>
						<li>
							<button
								onClick={() => handleButtonClick("roles")}
								className={
									selectedTable === "roles" ? "selected" : ""
								}
							>
								Roles
							</button>
						</li>
						<li>
							<button
								onClick={() => handleButtonClick("permisos")}
								className={
									selectedTable === "permisos"
										? "selected"
										: ""
								}
							>
								Permisos
							</button>
						</li>
					</ul>
					<div className="add-btn-container">
						<button
							className="add-btn page-button"
							onClick={handleAdd}
						>
							<span className="add-icon">
								<img src={addtIcn} />
							</span>
							Añadir
						</button>
					</div>
					<div className="table-scroll">
						{tabledata && tabledata.length > 0 ? (
							<>
								{selectedTable === "usuarios" && (
									<>
										<table>
											<thead>
												<tr>
													<th>Correo</th>
													<th>Rol</th>
													<th>Accion</th>
												</tr>
											</thead>
											<tbody>
												{tabledata.map((user) => {
													if (!user) {
														return null;
													}
													return (
														<tr key={user._id}>
															<td>
																{user.correo}
															</td>
															<td>
																{user.rol
																	? user.rol
																			.nombreRol
																	: "Sin rol"}
															</td>
															<td>
																<button
																	className="options-btn"
																	onClick={() =>
																		handleEditClick(
																			user._id
																		)
																	}
																>
																	<img
																		src={
																			opttIcn
																		}
																	/>
																</button>
																{editingRow ===
																	user._id && (
																	<div className="menu-emergente">
																		<ul className="custom-ul pop-menu">
																			<li
																				className="custom-li pop-menu-option"
																				onClick={() => {
																					setdecidiendo(
																						user._id
																					);
																				}}
																			>
																				<img
																					src={
																						deleteIcn
																					}
																					alt="x"
																				/>
																				Eliminar
																			</li>
																			<li
																				className="custom-li pop-menu-option"
																				onClick={() => {
																					navigate(
																						"/edit/usuarios/" +
																							user._id
																					);
																				}}
																			>
																				<img
																					src={
																						editIcn
																					}
																					alt="x"
																				/>
																				Editar
																			</li>
																		</ul>
																	</div>
																)}
															</td>
														</tr>
													);
												})}
											</tbody>
										</table>
									</>
								)}
								{selectedTable === "roles" && (
									<>
										<table>
											<thead>
												<tr>
													<th>Nombre</th>
													<th>Usuarios con el rol</th>
													<th>Accion</th>
												</tr>
											</thead>
											<tbody>
												{tabledata.map((rol) => {
													if (!rol.rol) {
														return null;
													}
													return (
														<tr key={rol.rol._id}>
															<td>
																{rol.rol
																	.nombreRol
																	? rol.rol
																			.nombreRol
																	: ""}
															</td>
															<td>
																<ul className="custom-ul">
																	{
																		rol
																			.usuarios
																			.length
																	}{" "}
																	Usuarios
																</ul>
															</td>
															<td>
																<button
																	className="options-btn"
																	onClick={() =>
																		handleEditClick(
																			rol
																				.rol
																				._id
																		)
																	}
																>
																	<img
																		src={
																			opttIcn
																		}
																	/>
																</button>
																{editingRow ===
																	rol.rol
																		._id && (
																	<div className="menu-emergente">
																		<ul className="custom-ul pop-menu">
																			<li
																				className="custom-li pop-menu-option"
																				onClick={() => {
																					setdecidiendo(
																						rol
																							.rol
																							._id
																					);
																				}}
																			>
																				<img
																					src={
																						deleteIcn
																					}
																					alt="x"
																				/>
																				Eliminar
																			</li>
																			<li
																				className="custom-li pop-menu-option"
																				onClick={() => {
																					navigate(
																						"/edit/roles/" +
																							rol
																								.rol
																								._id
																					);
																				}}
																			>
																				<img
																					src={
																						editIcn
																					}
																					alt="x"
																				/>
																				Editar
																			</li>
																		</ul>
																	</div>
																)}
															</td>
														</tr>
													);
												})}
											</tbody>
										</table>
									</>
								)}
								{selectedTable === "permisos" && (
									<>
										<table>
											<thead>
												<tr>
													<th>Nombre</th>
													<th>
														Usuarios con el permiso
													</th>
													<th>Accion</th>
												</tr>
											</thead>
											<tbody>
												{tabledata.map((permiso) => {
													if (!permiso.permiso) {
														return null;
													}
													return (
														<tr
															key={
																permiso.permiso
																	._id
															}
														>
															<td>
																{
																	permiso
																		.permiso
																		.permiso
																}
															</td>
															<td>
																<ul className="custom-ul">
																	{
																		permiso
																			.usuarios
																			.length
																	}{" "}
																	Usuarios
																</ul>
															</td>
															<td>
																<button
																	className="options-btn"
																	onClick={() =>
																		handleEditClick(
																			permiso
																				.permiso
																				._id
																		)
																	}
																>
																	<img
																		src={
																			opttIcn
																		}
																	/>
																</button>
																{editingRow ===
																	permiso
																		.permiso
																		._id && (
																	<div className="menu-emergente">
																		<ul className="custom-ul pop-menu">
																			<li
																				className="custom-li pop-menu-option"
																				onClick={() => {
																					setdecidiendo(
																						permiso
																							.permiso
																							._id
																					);
																				}}
																			>
																				<img
																					src={
																						deleteIcn
																					}
																					alt="x"
																				/>
																				Eliminar
																			</li>
																			<li
																				className="custom-li pop-menu-option"
																				onClick={() => {
																					navigate(
																						"/edit/permisos/" +
																							permiso
																								.permiso
																								._id
																					);
																				}}
																			>
																				<img
																					src={
																						editIcn
																					}
																					alt="x"
																				/>
																				Editar
																			</li>
																			<li
																				className="custom-li pop-menu-option"
																				onClick={() => {
																					navigate(
																						"/gestionate/permisos/" +
																							permiso
																								.permiso
																								._id
																					);
																				}}
																			>
																				<img
																					src={
																						gestionateIcn
																					}
																					alt="x"
																				/>
																				Gestionar
																				Permisos
																			</li>
																		</ul>
																	</div>
																)}
															</td>
														</tr>
													);
												})}
											</tbody>
										</table>
									</>
								)}
							</>
						) : (
							<div className="spinner"></div>
						)}
					</div>
				</div>
				<ModalQuestion
					acceptText={"Eliminar"}
					isOpen={decidiendo !== undefined}
					message={
						"Estas seguro/a de que quieres eliminar el elemento?"
					}
					onAccept={() => {
						if (selectedTable === "usuarios") {
							axios
								.delete(api + "/users/" + decidiendo)
								.then(() => {
									handleEditClick(decidiendo);
									settabledata(undefined);
								})
								.catch((error) => {
									console.error("Error:", error);
								});
						} else if (selectedTable === "roles") {
							axios
								.delete(api + "/admin-rol/role/" + decidiendo)
								.then(() => {
									handleEditClick(decidiendo);
									settabledata(undefined);
								})
								.catch((error) => {
									console.error("Error:", error);
								});
						} else if (selectedTable === "permisos") {
							axios
								.delete(
									api + "/admin-rol/permiso/" + decidiendo
								)
								.then(() => {
									handleEditClick(decidiendo);
									settabledata(undefined);
								})
								.catch((error) => {
									console.error("Error:", error);
								});
						}
						setdecidiendo(undefined);
					}}
					onReject={() => {
						setdecidiendo(undefined);
					}}
					rejectText={"Cancelar"}
					title={"Eliminar"}
				></ModalQuestion>
			</div>
		);
	} else {
		return <Navigate to="/"></Navigate>;
	}
}
