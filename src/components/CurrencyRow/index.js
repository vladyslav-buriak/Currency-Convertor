import CustomSelect from '../CustomSelect';
import CustomInput from '../CustomInput/index.';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const CurrencyRow = ({ handleSelectFrom, handleSelectTo, handleFrom, handleTo, to, from, options, value, placeholder, onChange, type, inputFrom, inputTo }) => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                <Typography mb={2} sx={{ textAlign: 'center' }} variant="h5">Конвертр Валют</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                    <CustomInput onChange={handleFrom} value={inputFrom} />
                    <CustomSelect onChange={handleSelectFrom} value={from} options={options} from={inputFrom} />
                </Box>


                <Box mt={3} sx={{ display: 'flex' }}>
                    <CustomInput onChange={handleTo} value={inputTo} />
                    <CustomSelect onChange={handleSelectTo} value={to} options={options} from={inputFrom} />
                </Box>

            </Box>


        </>
    );
}

export default CurrencyRow;