import React from 'react';
import { ComponentBackground } from '../../styles/layout';
import { Container } from './ShowDate.style';

export default ({ date }) => {
  return (
    <ComponentBackground>
      <h4> {date}</h4>
    </ComponentBackground>
  );
};
