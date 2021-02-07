import { useField } from 'formik';

const RadioInput = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'radio' });

  return (
    <div className='radio-input'>
      <label>
        <input type='radio' {...field} {...props} />
        {children}
      </label>
    </div>
  );
};

export default RadioInput;
