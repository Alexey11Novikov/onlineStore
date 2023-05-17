import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Grid } from '@mui/material';
import { add, change } from './request';

export default function ActionModal(props) {
    const { selectId, nameBtn, open, setOpen, selectedData } = props;
    const [data, setData] = React.useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const actionBtn = () => {
        if (nameBtn === 'Добавить') {
            console.log(data);
            add(data);
        } else {
            change(selectId, data);
        }
        setOpen(false);
    }

    const onChangeName = (value) => {
        data["name"] = value;
        setData(data);
    }
    const onChangeAge = (value) => {
        data["age"] = value;
        setData(data);
    }

    const onChangeEmail = (value) => {
        data["email"] = value;
        setData(data);
    }
    const onChangeDateBirthday = (value) => {
        data["date_birthday"] = value;
        setData(data);
    }

    // console.log(selectedData)
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={3} md={3} lg={3}><TextField margin="dense" 
                        defaultValue={selectedData ? selectedData.name : ''} onChange={(e) => onChangeName(e.target.value)}
                            label="name" variant="outlined" /></Grid>
                        <Grid item xs={3} md={3} lg={3}><TextField margin="dense" 
                        defaultValue={selectedData ? selectedData.age : ''} onChange={(e) => onChangeAge(e.target.value)}
                            label="age" variant="outlined" /></Grid>
                        <Grid item xs={3} md={3} lg={3}><TextField margin="dense"
                         defaultValue={selectedData ? selectedData.email : ''} onChange={(e) => onChangeEmail(e.target.value)}
                            label="email" variant="outlined" /></Grid>
                        <Grid item xs={3} md={3} lg={3}><TextField margin="dense"
                         defaultValue={selectedData ? selectedData.date_birthday : ''} onChange={(e) => onChangeDateBirthday(e.target.value)}
                            label="date_birthday" variant="outlined" /></Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={actionBtn}>{nameBtn}</Button>
                    <Button onClick={handleClose}>
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}