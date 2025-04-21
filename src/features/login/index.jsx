import React, {useContext, useState} from 'react';
import {Button, Typography} from "@mui/material";
import Input from "../../common/ui-kit/Input/index.jsx";
import {toast} from "react-toastify";
import {AuthContext} from "../../app/App.jsx";
import {useNavigate} from "react-router";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate();

    const [values, setValues] = useState({
        login: 'admin',
        password: 'admin',
    })

    const handleChange = (key, e) => {
        setValues({...values, [key]: e.target.value})
    }

    const handleLogin = () => {
        if (values.login === 'admin' && values.password === 'admin') {
            setIsAuth(true)
            navigate('/')
            toast.success('Вы в системе')
        } else {
            toast.error('Ошибка входа')
        }
    }

    return (
        <div className={'bg-gray-50 h-screen flex items-center justify-center'}>
            <div
                className={'p-[24px] rounded-md bg-white max-w-[340px] flex flex-col gap-[24px] items-center w-full shadow'}>
                <Typography variant="h6">
                    Авторизация
                </Typography>

                <div className={'flex flex-col gap-[12px] w-full'}>
                    <Input onChange={(e) => handleChange('login', e)} value={values.login} label={'Логин'}/>
                    <Input onChange={(e) => handleChange('password', e)} value={values.password} label={'Пароль'}
                           type={'password'}/>
                </div>

                <Button onClick={handleLogin} variant={'outlined'} fullWidth>Вход</Button>
            </div>
        </div>
    );
};

export default Login;