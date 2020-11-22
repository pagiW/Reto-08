import React from 'react';
import { connect } from 'react-redux';
import Jobcard from '../components/Jobcard';
import Filters from '../components/Filters';
import '../../styles/main.css'

const Main = (props) => {
    const { datas, filters, filtereds } = props;
    return (
        <main>
            {
                filters.length > 0 &&
                <Filters key={datas[0].id} />
            }
            {
                filters.length > 0 ?
                filtereds.map(filter => {
                    return <Jobcard key={filter.id} {...filter} />
                }):
                datas.map(data => {
                    return <Jobcard key={data.id} {...data} />
                })
            }
        </main>
    );
}

const mapStateToProps = (state) => ({
    datas: state.datas,
    filters: state.filters,
    filtereds: state.filtereds,
})

export default connect(mapStateToProps, null)(Main);