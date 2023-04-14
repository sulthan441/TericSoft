import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    makeStyles,
    Divider
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(3),
        borderRadius: theme.spacing(2),
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    deleteButton: {
        color: theme.palette.error.main,
    },
    editButton: {
        color: theme.palette.primary.main,
    },
    tableCell: {
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#555',
    }

}));


function EmployeeDetails() {
    const [employees, setEmployees] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch('http://localhost:8080/employees')
            .then((response) => response.json())
            .then((data) => setEmployees(data))
            .catch((error) => console.log(error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/employees/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setEmployees(employees.filter((employee) => employee.id !== id));
                alert("Employee deleted successfully!")
            })
            .catch((error) => console.log(error));
    };

    const handleEdit = (id, updatedEmployee) => {
        fetch(`http://localhost:8080/employees/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedEmployee)
        })
            .then(response => response.json())
            .then(data => {
                setEmployees(employees.map(employee => {
                    if (employee.id === id) {
                        return data;
                    } else {
                        return employee;
                    }
                }));
            })
            .catch(error => console.log(error));
    };


    return (
        <Container style={{ backgroundColor: "white" }} maxWidth="lg" className={classes.root}>
            <Typography style={{ color: "#3f51b5" }} variant="h4" align="center" gutterBottom>
                Employee Details
            </Typography>
            <Divider style={{ margin: '5px', backgroundColor: 'black', width: "100%" }} />
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableCell} >Name</TableCell>
                            <TableCell className={classes.tableCell}>Email</TableCell>
                            <TableCell className={classes.tableCell}>Phone</TableCell>
                            <TableCell className={classes.tableCell}>Date of Birth</TableCell>
                            <TableCell className={classes.tableCell}>Gender</TableCell>
                            <TableCell className={classes.tableCell}>Hobbies</TableCell>
                            <TableCell className={classes.tableCell}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow key={employee.id} className={classes.tableRow}>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{employee.phone}</TableCell>
                                <TableCell>{employee.dob}</TableCell>
                                <TableCell>{employee.gender}</TableCell>
                                <TableCell>
                                    {Object.keys(employee.hobbies)
                                        .filter((hobby) => employee.hobbies[hobby])
                                        .join(', ')}
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleDelete(employee.id)}>
                                        <DeleteIcon className={classes.deleteButton} />
                                    </IconButton>
                                    <IconButton onClick={() => handleEdit(employee.id)} component={Link} to={`/employeedetails/${employee.id}`}>
                                        <EditIcon className={classes.edit} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default EmployeeDetails;
