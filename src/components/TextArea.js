import { useField } from 'formik';

const TextArea = props => {
  const [field, meta] = useField(props);

  return (
    <div className='text-area'>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
