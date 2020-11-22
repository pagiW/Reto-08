import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setFiltered } from '../../actions';
import '../../styles/buttons.css';

const Role = ({ id, company, nuevo, featured, position, role, level, postedAt, contract, location, setFilter, setFiltered, languages, tools, isRole }) => {
    const handleClick = () => {
        setFilter({ id, company, nuevo, featured, position, level, postedAt, contract, location, languages, tools, role, tool: '', language: '', isLevel: '', isRole });
        setFiltered();
    }
    return (
        <button className='roleButton' onClick={handleClick}>{isRole}</button>
    );
}

const mapDispatchToProps = {
    setFilter,
    setFiltered,
}

export default connect(null, mapDispatchToProps)(Role);