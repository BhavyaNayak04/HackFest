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
                    Home page content goes here
                </Typography>
                <Button variant='contained' href='/Food' color='success'>
                     Donate Food
                </Button> 
                <Button variant='contained' href='/Login' style={{margin:'3px 0'}}>Register now</Button>
            </CardContent>
        </Card>
        </div>
        </div>
    )
}