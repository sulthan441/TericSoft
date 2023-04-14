import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Button,
    Divider
} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import "../App.css"
const EmployeeForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: new Date(),
        gender: 'Male',
        hobbies: {
            reading: false,
            writing: false,
            gaming: false,
        },
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? { ...prevState[name], [event.target.value]: checked } : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isFormFilled = Object.values(formData).every((value) => value !== '');

        if (!isFormFilled) {
            alert('Please fill all input fields.');
            return;
        }

        fetch('http://localhost:8080/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response failed');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Data received:', data);
                alert("Employee added successfully!")
                navigate('/employeedetails');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };




    return (
        <form onSubmit={handleSubmit}>
            <h2 style={{
                textAlign: 'center',
                color: '#3f51b5',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginBottom: '2rem'
            }}>Add Employee Details</h2>

            <TextField
                id="name"
                className="input-field"
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                id="email"
                className="input-field"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                id="phone"
                className="input-field"
                label="Phone"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputProps={{
                    type: "tel",
                    pattern: "^[0-9]{10}$",
                }}
            />

            <FormControl color="primary" component="fieldset">
                <FormLabel component="legend" style={{ color: "#3f51b5", fontWeight: "540", fontSize: "1.2rem" }}>Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        color="primary"
                        value="Male"
                        control={<Radio color="primary" checked={formData.gender === 'Male'} />}
                        label="Male"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        color="primary"
                        value="Female"
                        control={<Radio color="primary" checked={formData.gender === 'Female'} />}
                        label="Female"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </FormControl>

            <Divider style={{ margin: '5px', backgroundColor: 'black', width: "100%" }} />
            <FormControl component="fieldset">
                <FormLabel component="legend" style={{ color: "#3f51b5", fontWeight: "540", fontSize: "1.2rem" }}>Hobbies</FormLabel>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="reading"
                                className="checkbox-field"
                                checked={formData.hobbies.reading}
                                onChange={handleChange}
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
                                checked={formData.hobbies.writing}
                                onChange={handleChange}
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
                                checked={formData.hobbies.gaming}
                                onChange={handleChange}
                                name="hobbies"
                                value="gaming"
                                color="primary"
                            />
                        }
                        label="Gaming"
                    />
                </FormGroup>
            </FormControl>
            <Divider style={{ margin: '2px', backgroundColor: 'black', width: "100%" }} />
            <TextField
                id="dob"
                className="input-field"
                label="DOB"
                type="date"
                defaultValue={formData.dob}
                name="dob"
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default EmployeeForm
