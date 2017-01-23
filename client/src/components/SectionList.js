import {Component} from 'react';
import React from 'react';
import Section from './Section';

export default class SectionList extends Component {


    render() {

        const sections = this.props.sections || [];
        let sectionList = sections.map((section, index)=> {

            return <div key={index}>
                <Section index={index} {...section}/>
            </div>;
        });

        return (
            <div id='paper-section'>
                <div className='split-border'></div>
                {sectionList}
            </div>
        );
    }
}