import React from 'react';
import { Button, Grid } from '@mui/material';


const Buttons = () => {
    return (
        <Grid container spacing={1} sx={{ marginBottom: '5px' }}>
            <Grid item>
                <Button variant="contained" >Добавить</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" >Изменить</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" >Удалить</Button>
            </Grid>
        </Grid>
    )
}

export default Buttons;