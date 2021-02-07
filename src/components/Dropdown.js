import { useField } from 'formik';

const Dropdown = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='select'>
      <label htmlFor={props.name}>{label}</label>

      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Dropdown;
