import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function EncargadoInfo ({todo}){

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
