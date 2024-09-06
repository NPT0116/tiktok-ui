import React from 'react';
import myAlert from '~/myAlert';
const Button = () => {
  return (
    <div>
      <button onClick={myAlert}> Click Me!</button>
    </div>
  );
};

export default Button;