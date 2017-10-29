import React from 'react';
import { ComponentBackground } from '../../styles/layout';

export default ({ date }) => {
  return (
    <ComponentBackground>
      <h4> {date}</h4>
    </ComponentBackground>
  );
};
