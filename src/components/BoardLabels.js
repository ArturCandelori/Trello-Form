import Label from './Label';

const BoardLabels = ({ labels, idLabels, setIdLabels }) => {
  return (
    <div className='labels'>
      <label htmlFor='labels'>Etiquetas</label>
      <div id='labels'>
        {labels.map(l => (
          <Label
            key={l.id}
            label={l}
            idLabels={idLabels}
            setIdLabels={setIdLabels}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardLabels;
