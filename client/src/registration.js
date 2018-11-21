import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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

class Registration extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            city: "",
            postalCode: "",
            password: "",
            confirmPassword: "",
        } 
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handlePostalCodeChange = this.handlePostalCodeChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    }



    handleFirstNameChange(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleAddressChange(event) {
        this.setState({
            address: event.target.value
        })
    }

    handleCityChange(event) {
        this.setState({
            city: event.target.value
        })
    }

    handlePostalCodeChange(event) {
        this.setState({
            postalCode: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleConfirmPasswordChange(event) {
        this.setState({
            confirmPassword: event.target.value
        })
    }
    
    handleSubmit(){
        
    }

    canBeSubmitted(){
        const {firstName, lastName, email, address, city, postalCode, password, confirmPassword} = this.state;
        return (
            firstName.length > 0 &&
            lastName.length > 0 &&
            email.length > 0 &&
            address.length > 0 &&
            city.length > 0 &&
            postalCode.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0
        );
    }

    render(){
        const isEnabled = this.canBeSubmitted();

        return(
            <Card
            className={this.card}
            >
                <CardContent className={this.content}>
                    <TextField
                    type='text'
                    label="First Name"
                    className={(this.textField, this.margin)}
                    onChange={this.handleFirstNameChange}
                    />
                    <br />
                    <TextField
                    type='text'
                    label="Last Name"
                    className={(this.textField, this.margin)}
                    onChange={this.handleLastNameChange}
                    />
                    <br />
                    <TextField
                    type='text'
                    label="Email"
                    className={(this.textField, this.margin)}
                    onChange={this.handleEmailChange}
                    />
                    <br />
                    <TextField
                    type='text'
                    label="Street Address"
                    className={(this.textField, this.margin)}
                    onChange={this.handleAddressChange}
                    />
                    <br />
                    <TextField
                    type='text'
                    label="City"
                    className={(this.textField, this.margin)}
                    onChange={this.handleCityChange}
                    />
                    <br />
                    <TextField
                    type='text'
                    label="Postal Code"
                    className={(this.textField, this.margin)}
                    onChange={this.handlePostalCodeChange}
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
                        ),}}
                    onChange={this.handlePasswordChange}
                    />
                    <br />
                    <TextField
                    type='password'
                    label="Confirm Password"
                    className={(this.textField, this.margin)}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility">
                                <VisibilityOff />
                                </IconButton>
                            </InputAdornment>
                        ),}}
                    onChange={this.handleConfirmPasswordChange}
                    />
                    <br />
                    <br />
                    <Button variant="contained" color="primary" disabled={!isEnabled}> 
                        Register
                    </Button>
                    {console.log(!isEnabled)}
                </CardContent>
            </Card>
        );
    }
}
export default Registration;