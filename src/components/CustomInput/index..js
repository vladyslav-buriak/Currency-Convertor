import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

const CustomInput = ({value, placeholder, onChange, type, }) => {
    return (
        < Paper
            component="div"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: '200px' }
            }
        >
            <InputBase
                type={type}
                placeholder={placeholder}
                value={value}
                inputProps={{ 'aria-label': 'put list name' }}
                onChange={(e) => { onChange(e.target.value) }}
            />
        </Paper >
    );
}

export default CustomInput