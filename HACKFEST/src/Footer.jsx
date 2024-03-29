import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Typography } from '@mui/material';


export default function Footer () {
    return (
        <AppBar position='static' sx={{ top: 'auto', bottom: 0, backgroundColor:'green' }}>
            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Typography variant='h6'>
                        MatrGashti
                    </Typography>
                    <Typography variant='h7'>
                        All rights reserved.
                    </Typography>
            </Box>
        </AppBar>
    )
}