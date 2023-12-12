import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { IconLoading } from "../../Utils/IconsLoading";
import { ButtonStatus } from "../../Utils/CambiarEstado";
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
      label: "Descripción de la oferta",
      sort: true,
    },
    {
      name: "candidate_direccion",
      label: "Dirección del Proveedor",
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
function Contracting() {
  const url = import.meta.env.VITE_URL_CONTRACTING;
  const title = "Contrato";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      console.log(data)
      const newList = data.map((items, index) => {
        const candidate = items.id_candidates;
        const provider = items.id_provider;
        const offer = items.id_offers;
        console.log(items)
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
  // "_id": "656475c51e49a20463d4bee6",
  // "estado": true,
  // "id_candidates": {
  //     "_id": "655d07affb361b04b55a63e6",
  //     "id_offers": "655d07acfb361b04b55a63dc",
  //     "id_ServiceProvider": [
  //         "655d21e2f1b7f5f0aba7a388"
  //     ],
  //     "id_CandidateStatus": true,
  //     "selectedCandidate": {
  //         "_id": "655d21e2f1b7f5f0aba7a388",
  //         "nombre": "Mario Layton ",
  //         "documento": "1097891168",
  //         "telefono": "3116667768",
  //         "direccion": "ASD",
  //         "id_calificacion": [],
  //         "categoriaServicio": [
  //             "6543df3eead1e813f0327bcc",
  //             "655bbabe78da4bfa83594ee6"
  //         ]
  //     },
  //     "DateApplied": "21/11/2023",
  //     "__v": 0
  // },
  // "id_provider": {
  //     "_id": "655d21e2f1b7f5f0aba7a388",
  //     "nombre": "Mario Layton ",
  //     "documento": "1097891168",
  //     "telefono": "3116667768",
  //     "direccion": "ASD",
  //     "id_calificacion": [],
  //     "categoriaServicio": [
  //         "6543df3eead1e813f0327bcc",
  //         "655bbabe78da4bfa83594ee6"
  //     ]
  // },
  // "id_offers": {
  //     "_id": "655d07acfb361b04b55a63dc",
  //     "publicationDate": "21/11/2023",
  //     "description": "Arreglo de puertas de habitaciones ",
  //     "id_OfferStatus": "65362881c8c96ecfeece3b99",
  //     "id_property": "655d060ffb361b04b55a62ef",
  //     "id_service": "655b9f92c121b54b6cc18ea5",
  //     "__v": 0
  // },
  // "DateApplied": "27/11/2023",
  // "__v": 0
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
export default Contracting;
