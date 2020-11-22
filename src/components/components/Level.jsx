import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setFiltered } from '../../actions';
import '../../styles/buttons.css';

const Level = ({ id, company, nuevo, featured, position, level, role, postedAt, contract, location, setFilter, setFiltered, tools, languages, isLevel }) => {
    const handleClick = () => {
        setFilter({ id, company, nuevo, featured, position, level, postedAt, contract, location, languages, tools, role, tool: '', language: '', isLevel, isRole: '' });
        setFiltered();
    }
    return (
        <button className='levelButton' onClick={handleClick}>{isLevel}</button>
    );
}

const mapDispatchToProps = {setFilter, setFiltered};

export default connect(null, mapDispatchToProps)(Level);