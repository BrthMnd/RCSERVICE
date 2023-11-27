import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function PropietarioInfo ({todo}){

    return(
        <>
        <TextSpecial name={'Documento:'} value={todo.documento} />
        <TextSpecial name={'Nombre:'} value={todo.nombreCompleto} />
        <TextSpecial name={'Teléfono:'} value={todo.telefono} />
        <TextSpecial name={'Correo:'} value={todo.email} />
        <TextSpecial name={'Dirección:'} value={todo.direccion} />

        </>

    )
}
        // nombreCompleto: Owner.nombre,
        //   email: `${Owner.correo}`,
        //   estadoPropietario: status,
        //   //
        //   nombre: Owner.nombre,

        //   documento: Owner.documento,
        //   correo: Owner.correo,
        //   telefono: Owner.telefono,
        //   direccion: Owner.direccion,