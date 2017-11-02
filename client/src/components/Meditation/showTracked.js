import React from 'react';
import pluralize from 'pluralize';

export default props => {
  return (
    <p>
      {props.time} {pluralize(' minute', props.time)}
    </p>
  );
};
