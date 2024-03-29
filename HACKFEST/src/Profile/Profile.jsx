import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function Home(){
    return(
        <div>
        <div style={{minHeight:'calc(100vh - 115px', display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
        <Card variant='outlined'>
            <CardContent sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', minWidth:'300px', minHeight:'300px'}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  1. Update to profile if not updated already.
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  2. Show profile details and orders placed. 
                </Typography>
            </CardContent>
        </Card>
        </div>
        </div>
    )
}