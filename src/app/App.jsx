import './App.css'
import UsersList from "../features/usersList/index.jsx";
import Login from "../features/login/index.jsx";
import {createContext, useState} from "react";
import {Routes, Route} from "react-router";
import PrivateRoute from "../common/component/privateRoute/index.jsx";

export const AuthContext = createContext(null)

function App() {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/'} element={
                    <PrivateRoute>
                        <UsersList/>
                    </PrivateRoute>}/>
            </Routes>
        </AuthContext.Provider>
    )
}

export default App
