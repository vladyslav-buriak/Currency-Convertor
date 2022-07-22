import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { CurrencyRow } from '../../components';
import { SECONDARY_BG } from '../../theme';
import { CustomSelect } from '../../components';

const useStyles = makeStyles({
    mainWrapp: {
        background: SECONDARY_BG,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const Main = (props) => {

    const classes = useStyles();
    return (

        <Box className={classes.mainWrapp} component="div">
            <Box sx={{ maxWidth: '600px', width: '100%', padding: '3rem' }}>
                <Box sx={{ display: 'flex', background: '#fff', padding: '4rem', borderRadius: '6px' }}>
                    <CurrencyRow sx={{ margin: '0 auto' }}  {...props} />
                </Box>
            </Box>
        </Box>
    );
}

export default Main;