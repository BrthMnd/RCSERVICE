import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { IconLoading } from "../../Utils/IconsLoading";
import { ButtonStatus } from "../../Utils/CambiarEstado";
import { useSelector } from "react-redux";
const ColumnsDefault = (list, url, title) => {
  return [
    {
      name: "status",
      label: "Estado de Ofertas",
    },
    {
      name: "fecha",
      label: "Fecha de inicio",
    },
    {
      name: "description",
      label: "Descripción del contrato",
      sort: true,
    },
    {
      name: "direccion_propiedad",
      label: "Dirección del Inmueble",
    },
    {
      name: "servicio",
      label: "Servicio",
    },
    {
      name: "name_provider",
      label: "Nombre del Proveedor",
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction({ value, tableMeta, list, url, title }),
      },
    },
  ];
};
function Contracting_Provider() {
  const url = import.meta.env.VITE_URL_CONTRACTING;
  const title = "Contrato";
  const [list, setList] = useState([]);
  const user = useSelector((state) => state.user);
  console.log("🤡", user.id_provider);

  let [data, loading, error] = ApiGet(url);
  console.log("😶‍🌫️", data);
  useEffect(() => {
    if (data) {
      const idUsuario = user.id_provider;

      const newList = data
        .filter((contrato) => {
          return contrato.id_provider._id === idUsuario;
        })
        .map((items, index) => {
          const candidate = items.id_candidates;
          const provider = items.id_provider;
          const offer = items.id_offers;

          return {
            id: items._id,
            candidate_id: candidate._id,
            provider_id: provider._id,
            offer_id: offer._id,
            offer_offerStatus: offer.id_OfferStatus,
            offer_property: offer.id_property,
            offer_service: offer.id_service,
            status: offer.state,
            index: index + 1,
            //
            offer_publicationDate: offer.publicationDate,
            description: offer.description,
            estado: items.estado,
            fecha: items.DateApplied,
            //
            name_provider: candidate.selectedCandidate.nombre,
            candidate_documento: candidate.selectedCandidate.documento,
            candidate_telefono: candidate.selectedCandidate.telefono,
            candidate_direccion: candidate.selectedCandidate.direccion,
            //
            direccion_propiedad: offer.id_property
              ? offer.id_property.direccion
              : "",
            servicio: offer.id_service ? offer.id_service.Nombre_Servicio : "",
            //
            provider_documento: provider.documento,
            provider_telefono: provider.telefono,
            provider_direccion: provider.direccion,
            provider_categoriaServicio: provider.categoriaServicio,
            //
          };
        });
      setList(newList);
    }
  }, [data]);
  return (
    <section className="sections custom-mui-datatable" id="section__property">
      <IconLoading isLoading={loading} />
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <Datatables
          data={list}
          col={ColumnsDefault(list, url, title)}
          title={title}
          url={url}
        />
      )}
    </section>
  );
}
export default Contracting_Provider;
