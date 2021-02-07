import { useState } from 'react';

const Label = ({ label, idLabels, setIdLabels }) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectLabel = () => {
    setIdLabels(idLabels ? `${idLabels},${label.id}` : `${label.id}`);
    setIsSelected(true);
  };

  return (
    <div
      className='label'
      style={{ backgroundColor: isSelected && '#f1f9ff' }}
      onClick={selectLabel}
    >
      {label.name}
    </div>
  );
};

export default Label;
