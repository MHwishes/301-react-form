import {Component} from 'react';
import React from 'react';
import Section from './Section';

export default class SectionList extends Component {

  render() {
    return (
      <div id='paper-section'>
          <div className='split-border'></div>
          <Section/>
      </div>
    );
  }
}