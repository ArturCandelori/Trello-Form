const RadioGroup = ({ children, label, ...props }) => {
  return (
    <div className='radio-group'>
      <label htmlFor={props.name}>{label}</label>
      <div role='group' id={props.name}>
        {children}
      </div>
    </div>
  );
};

export default RadioGroup;
