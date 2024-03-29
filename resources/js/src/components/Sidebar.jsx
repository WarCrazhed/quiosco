import useQuiosco from "../hooks/useQuiosco"
import { useAuth } from '../hooks/useAuth'
import { Categoria } from "./Categoria";

export const Sidebar = () => {

    const {categorias} = useQuiosco();
    const { logout } = useAuth({middleware: 'auth'})

    return (
        <aside
            className="md:w-72"
        >
            <div className="p-4">
                <img
                    className="w-40"
                    src="/img/logo.svg"
                    alt="Imagen Logo"
                />
            </div>

            <div className="mt-10">
                {categorias.map( categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={logout}
                >
                    Cancelar Orden
                </button>
            </div>
        </aside>
    )
}
