import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function ServicioInfo ({todo}){
    console.log(todo)

    return(
        <>
        <TextSpecial name={'Nombre del servicio: '} value={todo.nameService} />
        <TextSpecial name={'Descripción:'} value={todo.description} />
        <TextSpecial name={'Nombre de la categoría:'} value={todo.nameCategority} />
        <TextSpecial name={'Estado:'} value={todo.estado} />
   

        </>

    )
}
// nameService: service.Nombre_Servicio,
//           description: service.Descripcion,
//           estado: estado,
//           nameCategority: service.Categoria_Servicio
//             ? service.Categoria_Servicio.Nombre_Categoria
//             : "N/A",
//           id_category: service.Categoria_Servicio._id,