import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import Table from './Table';
import Form from './Form';

const useStyles = makeStyles({
    root: {
        padding: "1em",
    }
});

function MyApp() {
    const classes = useStyles();
    const [characters, setCharacters] = useState([]);

    function updateList(person) {
        setCharacters([...characters, person]);
      }

    function removeOneCharacter(index) {
        const updated = characters.filter((char, i) => {
            return i !== index;
        });
        setCharacters(updated);
    }

    return (
        <div className={classes.root}>
            <Table charData={characters} remove={removeOneCharacter}/>
            <Form handleSubmit={updateList}></Form>
        </div>
    );
}

export default MyApp;