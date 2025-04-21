import React, {useContext, useState} from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import {Button, IconButton, Typography} from "@mui/material";
import Input from "../../../../common/ui-kit/Input/index.jsx";
import Select from "../../../../common/ui-kit/Select/index.jsx";
import {LogsContext, UsersContext} from "../../index.jsx";
import moment from "moment";
import {v4} from "uuid";

const options = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
]

const List = ({name, email, role, access_level, id, is_admin = false}) => {
    const {handleSaveLog} = useContext(LogsContext)
    const {handleChangeUsers, users} = useContext(UsersContext)

    const [editValues, setEditValues] = useState({
        access_level: access_level,
        role: role
    })

    const handleSaveEdit = () => {
        // Стартовые данные для логов (только дата создания лога, генерация id, name)
        const result = {
            date: moment().format(),
            id: v4(),
            name: name
        }

        // Формируем логи
        if (editValues.access_level !== access_level) {
            result.access_level = {
                new_value: editValues.access_level,
                old_value: access_level,
                label: "Уровень доступа"
            }
        }
        if (editValues.role !== role) {
            result.role = {
                new_value: editValues.role,
                old_value: role,
                label: "Роль"
            }
        }

        // Обновляем юзера при изменении
        handleChangeUsers(users.map((el) => el.id === id ? ({
            ...el,
            role: editValues.role,
            access_level: editValues.access_level
        }) : el))

        // Сохраняем логи
        handleSaveLog(result)
    }

    const handleDelete = () => {
        if (confirm('Подтвердите действие')) {
            // Стартовые данные для логов при удалении юзера
            const result = {
                date: moment().format(),
                id: v4(),
                name: name,
                isDelete: true
            }
            // Обновляем юзера при изменении
            handleChangeUsers(users.filter((f) => f.id !== id))

            // Сохраняем логи
            handleSaveLog(result)
        }
    }

    const handleChange = (key, value) => {
        setEditValues({...editValues, [key]: value})
    }

    const isDisabledSaveButton = editValues.access_level === access_level && editValues.role === role

    return (
        <div className={'border rounded-md p-3'}>
            <div className={'flex items-center justify-between gap-[8px]'}>
                <Typography variant="subtitle1">
                    №{id}
                </Typography>
                <IconButton onClick={handleDelete}>
                    <DeleteForeverOutlinedIcon sx={{color: 'red'}}/>
                </IconButton>
            </div>
            <div className={'flex flex-col gap-[12px] my-[24px]'}>
                <Input disabled={true} value={name} label={'Имя'}/>
                <Input disabled={true} value={email} label={'Почта'}/>
                <Input value={editValues?.role} disabled={is_admin}
                       onChange={(e) => handleChange('role', e.target.value)} label={'Роль'}/>
                <Select disabled={is_admin} onChange={(e) => handleChange('access_level', e.target.value)}
                        label={'Уровень доступа'}
                        options={options} value={editValues?.access_level}/>
            </div>

            <Button onClick={handleSaveEdit} disabled={isDisabledSaveButton} variant={'outlined'}
                    color={'info'}
                    fullWidth>Сохранить</Button>
        </div>
    );
};

export default List;
;