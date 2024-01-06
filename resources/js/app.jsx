import '../css/app.css'

import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import { QuioscoProvider } from './src/context/QuioscoProvider.jsx';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <QuioscoProvider>
            <RouterProvider router={router}/>
        </QuioscoProvider>
    </React.StrictMode>
);
