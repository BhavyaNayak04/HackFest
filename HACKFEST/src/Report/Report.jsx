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
                   Any other page content goes here. need not necessarily be a report page
                </Typography>
                
            </CardContent>
        </Card>
        </div>
        </div>
    )
}