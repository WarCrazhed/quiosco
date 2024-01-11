import useSWR from 'swr'
import useQuiosco from "../hooks/useQuiosco"
import { Producto } from "../components/Producto"
import clienteAxios from '../config/axios';
import { Link } from 'react-router-dom';

export const Inicio = () => {

    const { categoriaActual } = useQuiosco();

    // Consulta SWR
    const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
        refreshInterval: 1000
    })

    if(isLoading) return 'Cargando...'

    const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

    return (
        <>
            <Link to='/auth/registro'>Registro</Link>
            <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
            <p className="text-2xl my-10">
                Elige y personaliza tu pedido a continuación
            </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {productos.map(producto => (
                    <Producto
                        key={producto.imagen}
                        producto={producto}
                    />
                ))}
            </div>
        </>
    )
}
