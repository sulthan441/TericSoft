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
import './EmployeeForm.css';
const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: new Date(),
        gender: 'male',
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
        console.log(formData);
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

            <FormControl component="fieldset">
                <FormLabel component="legend" style={{ color: "#3f51b5", fontWeight: "540", fontSize: "1.2rem" }}>Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
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
