import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


const CustomSelect = ({ options, value, onChange }) => {

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{value}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="currency"
                        onChange={(e) => { onChange(e.target.value) }}
                    >
                        <MenuItem value={value}>
                            <em>{value}</em>
                        </MenuItem>
                        {options.map(o => <MenuItem value={o}>{o}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>


            {/* <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={value}
                label="Age"
                onChange={(e) => { onChange(e.target.value) }}
            >
                <MenuItem value={value}>
                    <em>{value}</em>
                </MenuItem>

                {options.map(o => <MenuItem value={o}>{o}</MenuItem>)}

            </Select> */}
        </>
    )
}

export default CustomSelect;