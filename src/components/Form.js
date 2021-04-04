import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
    root: {
        width: "50%",
        padding: "1em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "500"
    },
    button: {
        marginLeft: "1em",
        border: "none",
        width: "auto",
        borderRadius: "5px",
        padding: "0.25rem 0.75rem",
        fontSize: "1.0rem",
        color: "white",
        backgroundColor: "rgba(0, 188, 212, 0.8)"
    },
    label: {
        flex: "0",
        padding: "0 1em"  
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
});

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
            <label className={classes.label} htmlFor="name">Name</label>
            <input
                className={classes.input}
                type="text"
                name="name"
                id="name"
                value={person.name}
                onChange={handleChange} />
            <label className={classes.label} htmlFor="job">Job</label>
            <input
                className={classes.input}
                type="text"
                name="job"
                id="job"
                value={person.job}
                onChange={handleChange} />
            <input
                className={classes.button}
                type="button"
                value="Submit"
                onClick={submitForm} />
        </form>
    );
}

export default Form;