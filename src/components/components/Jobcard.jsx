import React from 'react';
import photosnap from '../../images/photosnap.svg';
import manage from '../../images/manage.svg';
import account from '../../images/account.svg';
import myHome from '../../images/myhome.svg';
import loopStudios from '../../images/loop-studios.svg';
import faceIt from '../../images/faceit.svg';
import shortly from '../../images/shortly.svg';
import insure from '../../images/insure.svg';
import eyecam from '../../images/eyecam-co.svg';
import airFilter from '../../images/the-air-filter-company.svg';
import '../../styles/jobcard.css';
import Role from './Role';
import Level from './Level';
import Languajes from './laguajes';
import Tool from './Tool';

const Jobcard = (props) => {
    const { id, company, nuevo, featured, position, role, level, postedAt, contract, location, languages, tools } = props;
    return (
        <section className='jobcard'>
            <div className='company'>
                <img src={id === 1 ? photosnap : id === 2 ? manage : id === 3 ? account : id === 4 ? myHome : id === 5 ? loopStudios : id === 6 ? faceIt : id === 7 ? shortly : id === 8 ? insure : id === 9 ? eyecam : id === 10 && airFilter } alt={company} />
                <div className='description'>
                    <div className='company'>
                        <div className='name'>{company}</div>
                        { nuevo && <div className='new'><div>NEW!</div></div> }
                        { featured && <div className='featured'><div>FEATURED</div></div> }
                    </div>
                    <div className='position'>{position}</div>
                    <ul className='list'>
                        <li className='posted'>{postedAt}</li>
                        <li className='contract'>{contract}</li>
                        <li className='location'>{location}</li>
                    </ul>
                </div>
            </div>
            <div className='filters'>
                <Role key={role} isRole={role} {...props} />
                <Level key={level} isLevel={level} {...props} />
                {
                    languages.map(language => {
                        return <Languajes key={language} language={language} {...props} />
                    })
                }
                {
                    tools.length > 0 && tools.map(tool => <Tool key={tool} tool={tool} {...props} />)
                }
            </div>
        </section>
    );
}

export default Jobcard;