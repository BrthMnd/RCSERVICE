import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function EmpleadoInfo ({todo}){

    return(
        <>
        <TextSpecial name={'Documento:'} value={todo.documento} />
        <TextSpecial name={'Nombre:'} value={todo.name} />
        <TextSpecial name={'Teléfono:'} value={todo.phone} />
        <TextSpecial name={'Correo:'} value={todo.Email} />
        <TextSpecial name={'Dirección:'} value={todo.Address} />

        </>

    )
}
