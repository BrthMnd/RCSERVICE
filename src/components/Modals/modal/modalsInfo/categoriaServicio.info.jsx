import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function CategoriaServicioInfo ({todo}){
    console.log(todo)

    return(
        <>
        <TextSpecial name={'Nombre de la categoría: '} value={todo.nombreCategoria} />
        <TextSpecial name={'Descripción:'} value={todo.descripcion} />
        <TextSpecial name={'Fecha de creación:'} value={todo.fechaCreacion} />
        <TextSpecial name={'Estado:'} value={todo.Estado} />



        </>

    )
}
// nombreCategoria: Categority.Nombre_Categoria,
//           descripcion: Categority.Descripcion,
//           fechaCreacion: Categority.Fecha_Creacion,
//           Estado: estado,