import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setFiltered } from '../../actions';
import '../../styles/buttons.css';

const Tool = ({ tool, id, company, nuevo, featured, position, level, role, postedAt, contract, location, languages, tools, setFilter, setFiltered }) => {
    const handleClick = () => {
        setFilter({ id, company, nuevo, featured, position, level, postedAt, contract, location, languages, tools, role, tool, language: '', isLevel: '', isRole: '' });
        setFiltered();
    }
    return (
        <button className='toolButton' onClick={handleClick}>{tool}</button>
    );
}

const mapDispatchToProps = {
    setFilter,
    setFiltered
}

export default connect(null, mapDispatchToProps)(Tool);