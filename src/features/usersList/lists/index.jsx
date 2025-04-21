import React, {useContext} from 'react';
import List from "./list/index.jsx";
import {UsersContext} from "../index.jsx";

const Lists = () => {
    const {users} = useContext(UsersContext)

    if (!users || users?.length === 0) {
        return <h1>Нет данных</h1>
    }
    return (
        <div className={'grid grid-cols-4 gap-[16px]'}>
            {users?.map((el) => <List key={el.id}  {...el}/>)}
        </div>
    );
};

export default Lists;