import { useDispatch, useSelector } from "react-redux";
import { ApiGet, ApiPut, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeDataVoid } from "../../../../features/modal/moda.slice";

let api = import.meta.env.VITE_API_URL;
const urlCategoria = api + "/api/proveedores/Categoria";
const urlServicio = api + "/api/proveedores/Servicios";

export const ServiceModal = () => {
	const [empty, setEmpty] = useState(true);
	const dispatch = useDispatch();

	let datas = useSelector((state) => state.modal.data);

	const [data, error, loading] = ApiGet(urlCategoria);

	const HandlePost = (e) => {
		e.preventDefault();

		const resultado = {
			Nombre_Servicio: e.target.NombreServicio.value,
			Descripcion: e.target.DescripcionServicio.value,
			Categoria_Servicio: e.target.CategoriaServicio.value,
		};

		//dispatch(changeDataVoid());
		ApiPost(urlServicio, resultado);
		dispatch(changeDataVoid());
	};

	const HandlePut = (e) => {
		e.preventDefault();

		const resultado = {
			id: datas.id,
			Nombre_Servicio: e.target.NombreServicio.value,
			Descripcion: e.target.DescripcionServicio.value,
			Categoria_Servicio: e.target.CategoriaServicio.value,
		};
		ApiPut(urlServicio, resultado);
		dispatch(changeDataVoid());
	};

	useEffect(() => {
		console.log("effect");
		if (Object.keys(datas).length !== 0) {
			setEmpty(false);
		} else {
			setEmpty(true);
		}
	}, [datas]);

	return (
		<>
			{loading && <div>CARGANDO..........</div>}
			{error && (
				<div>
          <p>{error.message}</p>
				</div>
			)}

			{!loading && !error && (
				<form
					className="row g-3"
					onSubmit={empty ? HandlePost : HandlePut}
				>
					<div className="col-md-6">
						<div className="mb-3">
							<label
								htmlFor="inputNameService"
								className="form-label"
							>
								Nombre del Servicio
							</label>
							<input
								type="text"
								className="form-control"
								id="inputNameService"
								name="NombreServicio"
								defaultValue={empty ? "" : datas.nameService}
								placeholder="Ingrese el nombre del servicio"
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="inputCategoryService"
								className="form-label"
							>
								Categoría del Servicio
							</label>
							<select
								id="inputCategoryService"
								className="form-select"
								aria-label="Seleccione una categoría"
								name="CategoriaServicio"
								defaultValue={
									empty ? "" : datas.id.nameCategority
								}
							>
								{data?.map((items, index) => {
									return (
										<option key={index} value={items._id}>
											{items.Nombre_Categoria}
										</option>
									);
								})}
							</select>
						</div>
					</div>

					<div className="col-md-6">
						<div className="mb-3">
							<label
								htmlFor="inputDescriptionService"
								className="form-label"
							>
								Descripción del Servicio
							</label>
							<textarea
								className="form-control"
								id="inputDescriptionService"
								rows="4"
								name="DescripcionServicio"
								defaultValue={empty ? "" : datas.description}
								placeholder="Ingrese una descripción del servicio"
							></textarea>
						</div>
					</div>

					<div className="col-12 text-end">
						<button type="submit" className="btn btn-primary">
							Enviar
						</button>
					</div>
				</form>
			)}
		</>
	);
};
