import React from 'react';
import Countries from '../Countries';
import Cities from '../Cities';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <Cities name="city" />
        <Countries name="country" />
        <button>Get Weather</button>
    </form>
);

export default Form;

