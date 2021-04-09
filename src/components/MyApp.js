import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        padding: "1em",
    }
});

function MyApp() {
    const classes = useStyles();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                const characters = res.data.users_list;
                setCharacters(characters);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    function updateList(person) {
        makePostCall(person).then(callResult => {
            if (callResult) {
                setCharacters([...characters, person]);
            }
        }).then(() => {
            console.log(characters);
        });
    }

    function makePostCall(person) {
        return axios.post('http://localhost:5000/users', person)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    }

    function removeOneCharacter(index) {
        const id = characters[index].id;
        axios.delete(`http://localhost:5000/users/${id}`).then(res => {
            if (res.status === 204) {
                const updated = characters.filter((char, i) => {
                    return i !== index;
                });
                setCharacters(updated);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className={classes.root}>
            <Table charData={characters} remove={removeOneCharacter} />
            <Form handleSubmit={updateList}></Form>
        </div>
    );
}

export default MyApp;