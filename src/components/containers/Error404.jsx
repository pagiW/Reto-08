import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/error.css';

const Error404 = () => {
    return <h1 className='ErrorTitle'>Error404, NOT FOUND!: <Link to='/Reto-08'>Go to the main page</Link></h1>;
}

export default Error404;