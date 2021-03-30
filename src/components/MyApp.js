import React, { useState } from 'react'
import Table from './Table';

function MyApp() {
    const [characters, setCharacters] = useState([
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
    ])

    const removeOneCharacter = (index) => {
        const updated = characters.filter((char, i) => {
            return i !== index;
        });
        setCharacters(updated);
    }

    return (
        <div className="container">
            <Table charData={characters} remove={removeOneCharacter}/>
        </div>
    );
}

export default MyApp;