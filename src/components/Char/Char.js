import React from 'react';

const character = (props) => {
    const style = {
      display: 'inline-block',
      backgroundColor: '#FFF3D7',
      textAlign: 'center',
      border: '1px solid black',
      padding: '16px',
      margin: '16px'
    };

    
    return (
      <div style={style} onClick={props.click}>
        {props.char}
      </div>
    )
}

export default character;