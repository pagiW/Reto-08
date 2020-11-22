import React from 'react';
import { connect } from 'react-redux';
import Laguajes from './laguajes';
import Level from './Level';
import Role from './Role';
import Tool from './Tool';
import Remove from '../../images/icon-remove.svg';
import { delte, delteFilter, setFiltered } from '../../actions';
import '../../styles/filters.css';

const Filters = (props) => {
    const { filters, delteFilter, delte, setFiltered } = props;
    return (
        <section className='filtersList'>
            <div className='allFilters'>
                {
                    filters.map(filter => {
                        return(
                            <>
                                {
                                    filter.isRole !== '' &&
                                    <div>
                                        <Role key={filters.isRole} {...filter} />
                                        <button className='filterButton' onClick={() => {
                                            delteFilter({isRole: filter.isRole});
                                            setFiltered();
                                        }}><img src={Remove} alt={`remove the ${filter.isRole} filter`} /></button>
                                    </div>
                                }
                                {
                                    filter.isLevel !== '' &&
                                    <div>
                                        <Level key={filters.isLevel} {...filter} />
                                        <button className='filterButton' onClick={() => {
                                            delteFilter({isLevel: filter.isLevel});
                                            setFiltered();
                                        }}><img src={Remove} alt={`remove the ${filter.isLevel} filter`} /></button>
                                    </div>
                                }
                                {
                                    filter.language !== '' &&
                                    <div>
                                        <Laguajes key={filters.language} {...filter} />
                                        <button className='filterButton' onClick={() => {
                                            delteFilter({language: filter.language});
                                            setFiltered();
                                        }}><img src={Remove} alt={`remove the ${filter.language} filter`} /></button>
                                    </div>
                                }
                                {
                                    filter.tool !== '' &&
                                    <div>
                                        <Tool key={filters.tool} {...filter} />
                                        <button className='filterButton' onClick={() => {
                                            delteFilter({tool: filter.tool});
                                            setFiltered();
                                        }}><img src={Remove} alt={`remove the ${filter.tool} filter`} /></button>
                                    </div>
                                }
                            </>
                        )
                    })
                }
            </div>
            <button className='clear' onClick={() => {delte();setFiltered();}}>clear</button>
        </section>
    );
}

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = {
    delteFilter,
    delte,
    setFiltered,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);