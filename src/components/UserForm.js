import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const UserForm = ( props ) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ hasBeenSubmitted, setHasBeenSubmitted ] = useState(false);
    const [ valdError, setValdError ] = useState("");

    const createUser = (e) => {

        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        console.log('Welcome', newUser);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        return hasBeenSubmitted ?
        'Thank you for submitting the form!' :
        'Welcome, please submit the form';
    };

    return (
        <form className="form-width card p-3 rounded bg-secondary" onSubmit={ createUser }>
            <h3 className="text-warning text-center bg-dark p-2 rounded">{ formMessage() }</h3>
            <div className="p-3 text-light">
                <label className="form-label mx-3">First Name:</label>
                <input className="form-control" type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }></input>
            </div>
            <div className="text-warning">
                { firstName.length < 2 && firstName.length > 0 ?
                "First name must be at least 2 characters" :
                null}
            </div>
            <div className="p-3 text-light">
                <label className="form-label mx-3">Last Name:</label>
                <input className="form-control" type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }></input>
            </div>
            <div className="text-warning">
                { lastName.length < 2 && lastName.length > 0 ?
                "Last name must be at least 2 characters" :
                null}
            </div>
            <div className="p-3 text-light">
                <label className="form-label mx-3">Email:</label>
                <input className="form-control" type="text" value={email} onChange={ (e) => setEmail(e.target.value) }></input>
            </div>
            <div className="text-warning">
                { email.length < 5 && email.length > 0 ?
                "Email must be at least 5 characters" :
                null}
            </div>
            <div className="p-3 text-light">
                <label className="form-label mx-3">Password:</label>
                <input className="form-control" type="password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
            </div>
            <div className="text-warning">
                <ul className="list-unstyled">
                <li>{ password.length < 8 && password.length > 0 ?
                "Password must be at least 8 characters" :
                null}</li>
                <li>{ password != confirmPassword ?
                "Passwords do not match" :
                null}</li>
                </ul>
            </div>
            <div className="p-3 text-light">
                <label className="form-label mx-3">Confirm Password:</label>
                <input className="form-control" type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }></input>
            </div>
            <div className="text-warning">
                { confirmPassword.length < 8 && confirmPassword.length > 0 ?
                "Password must be at least 8 characters" :
                null
                }
            </div>
            <div className="d-flex justify-content-center">
                <input className="btn m-3 px-4 bg-danger text-light" type="submit" value="Create"></input>
            </div>
        <div className="d-flex flex-column text-white bg-dark p-4 rounded">
            <p>First Name: <span className="bg-warning text-dark">{firstName}</span></p>
            <p>Last Name: <span className="bg-warning text-dark">{lastName}</span></p>
            <p>Email: <span className="bg-warning text-dark">{email}</span></p>
            <p>Password: <span className="bg-warning text-dark">{password}</span></p>
            <p>Confirm Password: <span className="bg-warning text-dark">{confirmPassword}</span></p>
        </div>
        </form>
    );
}

export default UserForm;