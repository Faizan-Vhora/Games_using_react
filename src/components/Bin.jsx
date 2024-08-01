import React from 'react';
import { useDrop } from 'react-dnd';

const Bin = ({ children, onDrop, style }) => {
  const [, dropRef] = useDrop({
    accept: 'DISC',
    drop: (item) => onDrop(item),
  });

  return (
    <div
      ref={dropRef}
      className={`w-1/2 min-h-[200px] p-4 border-2 border-dashed flex flex-wrap gap-4 justify-center items-center ${style}`}
    >
      {children}
    </div>
  );
};

export default Bin;
