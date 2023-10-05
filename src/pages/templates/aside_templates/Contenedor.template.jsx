/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import Logo from "../../../assets/img/LogoRc.png";
import { useState } from "react";
import ModalQuestion from "../../../components/Modals/SimpleModalQuestion";
function ContainerAside({ children, logged }) {
	const [closesesion, setClosesesion] = useState(false);
	const navigate = useNavigate();

	function logout() {
		setClosesesion(true);
	}
	function logoutCanceled() {
		setClosesesion(false);
	}
	function logOutAcepted() {
		setClosesesion(false);
		navigate("/log-out");
	}

	return (
		<>
			<aside
				className="main-sidebar sidebar-dark-primary elevation-4"
				id="aside"
			>
				<NavLink to="/" className="brand-link">
					<img
						src={Logo}
						alt="Logo"
						className="brand-image img-circle elevation-3"
						style={{ opacity: 0.8 }}
					/>

					<span className="brand-text font-weight-light">
						Rc Service
					</span>
				</NavLink>

				<div className="sidebar">
					<nav className="mt-2">
						<ul
							className="nav nav-pills nav-sidebar flex-column"
							data-widget="treeview"
							role="menu"
							data-accordion="false"
						>
							{/* home */}
							<li className="nav-item">
								<Link href="/" className="nav-link">
									<i className="nav-icon fas fa-home"></i>
									<p>Home</p>
								</Link>
							</li>
							{children}
							{logged ? (
								<li className="nav-item">
									<Link onClick={logout} className="nav-link">
										<i className="nav-icon fas fa-sign-out-alt"></i>
										<p>Cerrar sesion</p>
									</Link>
								</li>
							) : (
								<></>
							)}
						</ul>
					</nav>
				</div>
			</aside>

			<ModalQuestion
				isOpen={closesesion}
				title="Seguro?"
				message="Seguro de que quieres cerrar la sesion?"
				acceptText="Aceptar"
				rejectText="Cancelar"
				onAccept={logOutAcepted}
				onReject={logoutCanceled}
			></ModalQuestion>
		</>
	);
}
export default ContainerAside;
