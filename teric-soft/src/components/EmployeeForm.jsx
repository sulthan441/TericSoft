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
            />
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
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
            <FormControl component="fieldset">
                <FormLabel component="legend">Hobbies</FormLabel>
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
