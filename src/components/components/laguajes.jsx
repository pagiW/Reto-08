import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setFiltered } from '../../actions';
import '../../styles/buttons.css';

const Languajes = ({ language, id, company, nuevo, featured, position, level, role, postedAt, contract, location, languages, tools, setFilter, setFiltered }) => {
    const handleClick = () => {
        setFilter({ id, company, nuevo, featured, position, level, postedAt, contract, location, languages, tools, role, language, tool: '', isLevel: '', isRole: '' });
        setFiltered();
    }
    return (
        <button className='languajesButton' onClick={handleClick}>{language}</button>
    );
}

const mapDispatchToProps = {
    setFilter,
    setFiltered
}

export default connect(null, mapDispatchToProps)(Languajes);