import React, {createContext, useState} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import Lists from "./lists/index.jsx";
import Logs from "./logs/index.jsx";
import {usersData} from "../../common/fakeData/users.js";

export const LogsContext = createContext(null)
export const UsersContext = createContext(null)

const UsersList = () => {
    const [logs, setLogs] = useState([])
    const [users, setUsers] = useState(usersData)

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSaveLog = (log) => {
        setLogs([log, ...logs])
    }
    const handleChangeUsers = (users) => {
        setUsers(users)
    }

    return (
        <LogsContext.Provider value={{logs, handleSaveLog}}>
            <UsersContext.Provider value={{users, handleChangeUsers}}>
                <Box sx={{width: '100%', padding: '24px'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab sx={{maxWidth: '50%', width: '100%'}} label="Юзеры" value={1}/>
                            <Tab sx={{maxWidth: '50%', width: '100%'}} label="Логи" value={2}/>
                        </Tabs>
                    </Box>

                    <div className={'mt-[24px]'}>
                        {value === 1 && <Lists/>}
                        {value === 2 && <Logs/>}
                    </div>
                </Box>
            </UsersContext.Provider>
        </LogsContext.Provider>
    );
};

export default UsersList;