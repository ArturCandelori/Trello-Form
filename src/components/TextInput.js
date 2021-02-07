import { useField } from 'formik';
import styled from 'styled-components';

// const StyledTextInput = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 6rem;

//   label,
//   input {
//     display: inline-block;
//   }

//   label {
//     color: #3ca3fb;
//     font-weight: bold;
//     margin: 0 0 4px 2px;
//   }

//   input {
//     color: #3ca3fb;
//     padding: 0.6rem;
//     border-radius: 10px;
//     border: 2px solid #bce0fd;
//   }

//   ::placeholder {
//     color: ;
//   }

//   .error {
//     color: #ff471a;
//     font-size: 0.8rem;
//     margin-left: 2px;
//   }
// `;

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
