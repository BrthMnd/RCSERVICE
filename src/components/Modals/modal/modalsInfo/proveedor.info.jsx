import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function ProveedorInfo ({todo}){

    return(
        <>
        <TextSpecial name={'Documento:'} value={todo.documento} />
        <TextSpecial name={'Nombre:'} value={todo.name} />
        <TextSpecial name={'Teléfono:'} value={todo.phone} />
        <TextSpecial name={'Categorías:'} value={todo.nameCategority} />
        <TextSpecial name={'Dirección:'} value={todo.Address} />

        </>

    )
}
// documento: provider.documento,
//           //
//           name: provider.nombre,
//           phone: provider.telefono,
//           Address: provider.direccion,
//           nameCategority: getCategoriasServicio(provider.categoriaServicio),
//           // ids
//           id_category: provider.categoriaServicio,