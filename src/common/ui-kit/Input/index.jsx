import React from 'react';
import {TextField} from "@mui/material";

const Input = ({label, value, onChange, disabled = false, type = 'text'}) => {
    return (

        <TextField disabled={disabled} type={type} onChange={onChange} fullWidth size={'small'}
                   value={value}
                   inputProps={{
                       autoComplete: 'new-password',
                       form: {
                           autoComplete: 'off',
                       },
                   }}
                   label={label}
                   variant="outlined"/>

    );
};

export default Input;