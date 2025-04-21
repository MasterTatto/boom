import React, {useContext} from 'react';
import {AuthContext} from "../../../app/App.jsx";
import {Navigate} from "react-router";

const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    return isAuth ? children : <Navigate to="/login" replace/>;
};

export default PrivateRoute;