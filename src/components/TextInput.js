import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='text-input'>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
