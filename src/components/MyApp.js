import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import Table from './Table';

const characters = [
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
];

function MyApp() {
    return (
        <div className="container">
            <Table charData={characters} />
        </div>
    );
}

export default MyApp;