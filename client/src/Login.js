import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CardContent from '@material-ui/core/CardContent';

const styles = theme =>({
    textField: {
        flexBasis: 200,
      },
    card: {
        display: 'flex',
    },
    content: {
        flex: '1 0 auto',
      },
    margin: {
        margin: theme.spacing.unit,
    },
})

class Login extends Component{
    state = {
        username: '',
        password: ''
    }



    render(){
        return(
            <Card
            className={this.card}
            >
                <CardContent className={this.content}>
                    <TextField
                    type='text'
                    label="Username"
                    className={(this.textField, this.margin)}
                    />
                    <br />
                    <TextField
                    type='password'
                    label="Password"
                    className={(this.textField, this.margin)}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility">
                                <VisibilityOff />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    />
                </CardContent>
            </Card>
        );
    }
}
export default Login;