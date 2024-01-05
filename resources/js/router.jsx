import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './src/layouts/Layout';
import { AuthLayout } from './src/layouts/AuthLayout';
import { Inicio } from './src/views/Inicio';
import { Login } from './src/views/Login';
import { Registro } from './src/views/Registro';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    }
]);

export default router;
