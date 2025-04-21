import React from 'react';
import {FormControl, InputLabel, MenuItem, Select as SelectMui} from "@mui/material";

const Select = ({value, onChange, label,disabled = false, options = []}) => {

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <SelectMui
                disabled={disabled}
                size={'small'}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={onChange}
            >
                {options?.map((el) => <MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>)}
            </SelectMui>
        </FormControl>
    );
};

export default Select;