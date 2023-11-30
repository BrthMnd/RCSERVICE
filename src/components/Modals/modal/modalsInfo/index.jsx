import { TextSpecial } from "../TextSpecials/textSpecial.component";
import CategoriaServicioInfo from "./categoriaServicio.info";
import ContratoInfo from "./contrato.info";
import EmpleadoInfo from "./empleado.info";
import EncargadoInfo from "./encargado.info";
import InmueblesInfo from "./inmueble.info";
import OfertaEstadoInfo from "./oferta.estado.info";
import OfertaInfo from "./oferta.info";
import PropietarioInfo from "./propietario.info";
import ProveedorInfo from "./proveedor.info";
import ServicioInfo from "./servicio.info";

export const  InfoHome= ({ todo })=> (
<>
    {todo.type == 'Inmueble' && <InmueblesInfo todo={todo.data} />}
    {todo.type == 'Propietario' && <PropietarioInfo todo={todo.data} />}
    {todo.type == 'Encargado' && <EncargadoInfo todo={todo.data} />}
    {todo.type == 'Categoría Servicio' && <CategoriaServicioInfo todo={todo.data} />}
    {todo.type == 'Servicio' && <ServicioInfo todo={todo.data} />}
    {todo.type == 'Empleados' && <EmpleadoInfo todo={todo.data} />}
    {todo.type == 'Proveedores' && <ProveedorInfo todo={todo.data} />}
    {todo.type == 'Ofertas' && <OfertaInfo todo={todo.data} />}
    {todo.type == 'Estados De Oferta' && <OfertaEstadoInfo todo={todo.data} />}
    {todo.type == 'Contrato' && <ContratoInfo todo={todo.data} />}
</>
)
