import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    makeStyles,
    MenuItem,
    FormControl,
    FormGroup,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(3),
        borderRadius: theme.spacing(2),
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        margin: theme.spacing(2, 0),
    },
    button: {
        marginTop: theme.spacing(3),
    }
}));

export default function EmployeeUpdation() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/employees/${id}`)
            .then((response) => response.json())
            .then((data) => setEmployee(data))
            .catch((error) => console.log(error));
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setEmployee({ ...employee, hobbies: { ...employee.hobbies, [name]: checked } });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8080/employees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(() => {
                console.log('Employee updated successfully');
                alert("Changes saved successfully!")
                navigate('/employeedetails');
            })
            .catch((error) => console.log(error));
    };


    return (
        <Container maxWidth="sm" className={classes.root}>
            <Typography variant="h4" align="center" gutterBottom>
                Update Employee Details
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.input}
                    label="Name"
                    name="name"
                    value={employee.name || ''}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    className={classes.input}
                    label="Email"
                    name="email"
                    value={employee.email || ''}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    className={classes.input}
                    label="Phone"
                    name="phone"
                    value={employee.phone || ''}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    className={classes.input}
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    value={employee.dob || ''}
                    onChange={handleInputChange}
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className={classes.input}
                    label="Gender"
                    name="gender"
                    select
                    value={employee.gender || ''}
                    onChange={handleInputChange}
                    required
                >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                </TextField>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="reading"
                                className="checkbox-field"
                                // checked={employee.hobbies.reading}
                                onChange={handleCheckboxChange}
                                name="hobbies"
                                value="reading"
                                color="primary"
                            />
                        }
                        label="Reading"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="writing"
                                className="checkbox-field"
                                onChange={handleCheckboxChange}
                                name="hobbies"
                                value="writing"
                                color="primary"
                            />
                        }
                        label="Writing"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="gaming"
                                className="checkbox-field"
                                onChange={handleCheckboxChange}
                                name="hobbies"
                                value="gaming"
                                color="primary"
                            />
                        }
                        label="Gaming"
                    />
                </FormGroup>


                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Save Changes
                </Button>
            </form>
        </Container >
    )
}

