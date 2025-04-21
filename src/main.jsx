import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import {Bounce, ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
