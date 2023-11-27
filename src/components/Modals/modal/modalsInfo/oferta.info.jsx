import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function OfertaInfo ({todo}){

    return(
        <>
        <TextSpecial name={'Tipo de inmueble:'} value={todo.TypeOfProperty} />
        <TextSpecial name={'Fecha de publicación:'} value={todo.publicationDate} />
        <TextSpecial name={'Descripción:'} value={todo.description} />
        <TextSpecial name={'Dirección:'} value={todo.direction} />
        <TextSpecial name={'Servicios:'} value={todo.service} />
        <TextSpecial name={'Estado:'} value={todo.Status} />

        </>

    )
}
// TypeOfProperty: items.id_property.tipoPropiedad,
//           publicationDate: items.publicationDate,
//           description: items.description,
//           direction: items.id_property.direccion,
//           service: items.id_service.Nombre_Servicio,
//           Status: items.id_OfferStatus.name,