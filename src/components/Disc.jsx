import React from 'react';
import { useDrag } from 'react-dnd';

const Disc = ({ id, color }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'DISC',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      className={`w-16 h-16 rounded-full cursor-pointer ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Disc;
