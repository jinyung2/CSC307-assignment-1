import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        padding: "1em",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontWeight: "500",
        "& *": {
            margin: "0.1em"
        },
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap",
            flexDirection: "column",
        }
    },
    button: {
        marginLeft: "1em",
        border: "none",
        width: "auto",
        borderRadius: "5px",
        padding: "0.25rem 0.75rem",
        fontSize: "1.0rem",
        color: "white",
        backgroundColor: "rgba(0, 188, 212, 0.8)",
        [theme.breakpoints.down('sm')]: {
            padding: "1rem 2rem",
            margin: "1em"
        }
    },
    formContainer: {
        width: "40%",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            width: "70%"
        }
    },
    label: {
        width: "30px",
        flex: "0",
        padding: "0 1em",
    },
    input: {
        font: "inherit",
        fontWeight: "normal",
        border: "none",
        borderBottom: "1px solid lightblue",
        flex: "1 1 auto",
        "&:focus": {
            outline: "none"
        }
    }
}));

function Form(props) {
    const classes = useStyles();
    const [person, setPerson] = useState(
        {
            name: '',
            job: '',
        }
    );

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "job")
            setPerson(
                { name: person['name'], job: value }
            );
        else
            setPerson(
                { name: value, job: person['job'] }
            );
    }

    function submitForm() {
        props.handleSubmit(person);
        setPerson({ name: '', job: '' });
    }


    return (
        <form className={classes.root}>
            <div className={classes.formContainer}>
                <label className={classes.label} htmlFor="name">Name</label>
                <input
                    className={classes.input}
                    type="text"
                    name="name"
                    id="name"
                    value={person.name}
                    onChange={handleChange} />
            </div>
            <div className={classes.formContainer}>
                <label className={classes.label} htmlFor="job">Job</label>
                <input
                    className={classes.input}
                    type="text"
                    name="job"
                    id="job"
                    value={person.job}
                    onChange={handleChange} />
            </div>
            <input
                className={classes.button}
                type="button"
                value="Submit"
                onClick={submitForm} />
        </form>
    );
}

export default Form;