import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Bin from '../components/Bin';
import Disc from '../components/Disc';

const BinGame = () => {
  const [createDiscs, setCreateDiscs] = useState([]);
  const [deleteDiscs, setDeleteDiscs] = useState([]);
  const [nextDiscId, setNextDiscId] = useState(1);

  const addDisc = () => {
    const newDisc = { id: nextDiscId, color: getRandomColor() };
    setCreateDiscs([...createDiscs, newDisc]);
    setNextDiscId(nextDiscId + 1);
  };

  const moveDisc = (discId, toDeleteBin) => {
    if (toDeleteBin) {
      const disc = createDiscs.find(d => d.id === discId);
      setDeleteDiscs([...deleteDiscs, disc]);
      setCreateDiscs(createDiscs.filter(d => d.id !== discId));
    } else {
      setDeleteDiscs(deleteDiscs.filter(d => d.id !== discId));
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Bin Game</h1>
        <button onClick={addDisc} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4 transition">
          Create Disc
        </button>
        <div className="flex justify-around mt-4">
          <Bin onDrop={(item) => moveDisc(item.id, false)} style="bg-blue-100 shadow-md">
            {createDiscs.map(disc => (
              <Disc key={disc.id} id={disc.id} color={disc.color} />
            ))}
          </Bin>
          <Bin onDrop={(item) => moveDisc(item.id, true)} style="bg-red-100 shadow-md">
            {deleteDiscs.map(disc => (
              <Disc key={disc.id} id={disc.id} color={disc.color} />
            ))}
          </Bin>
        </div>
      </div>
    </DndProvider>
  );
};

export default BinGame;
