import React from 'react';

const Botones = ({texto,clase, funcion}) => {
  return (
    <div>
      <button onClick={funcion} className={`btn ${clase}`} >{texto}</button>
    </div>
  );
};

export default Botones;