import React, { useState } from 'react';

// Function to calculate Jupiterian Time
const getJupiterianTime = (lune: number, terre: number, soleil: number): string => {
  let total = lune + terre + soleil;

  // Adjust total based on Lune's value
  if (lune === 1) {
    total -= 2;
  } else if (lune === 2) {
    total = Math.floor(total / 2);
  }

  // Adjust total based on Terre's value
  if (terre === 1) {
    total += 2;
  } else if (terre === 2) {
    total = 6;
  }

  // Adjust total based on Soleil's value
  if (soleil === 1) {
    if (terre === 2) {
      total = lune + soleil;
    }
  } else if (soleil === 2) {
    total *= 2;
  }

  // Determine the Jupiterian Time based on total
  if (total <= 2) {
    return 'mortin';
  } else if (total <= 4) {
    return 'aprenoon';
  } else if (total <= 5) {
    return 'soirning';
  } else {
    return 'nuight';
  }
};

// React Functional Component
const JupiterianTime: React.FC = () => {
  // State hooks for lune, terre, and soleil
  const [lune, setLune] = useState(1);
  const [terre, setTerre] = useState(1);
  const [soleil, setSoleil] = useState(1);

  // Generic event handler for select elements
  const handleChange = (setFunc: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFunc(parseInt(e.target.value));
  };

  return (
    <div>
      <div>
        <label>
          Lune:
          <select value={lune} onChange={handleChange(setLune)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Terre:
          <select value={terre} onChange={handleChange(setTerre)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Soleil:
          <select value={soleil} onChange={handleChange(setSoleil)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </label>
      </div>
      <div>
        Jupiterian Time: {getJupiterianTime(lune, terre, soleil)}
      </div>
    </div>
  );
};

export default JupiterianTime;
