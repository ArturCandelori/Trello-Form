import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';

import './App.css';

import validationSchema from './utils/validationSchema';

import Dropdown from './components/Dropdown';
import TextInput from './components/TextInput';
import TextArea from './components/TextArea';
import Checkbox from './components/Checkbox';
import RadioInput from './components/RadioInput';
import RadioGroup from './components/RadioGroup';
import BoardLabels from './components/BoardLabels';

console.log(process.env);

const baseUrl = 'https://api.trello.com';
const key = process.env.REACT_APP_API_KEY;
const token = process.env.REACT_APP_API_TOKEN;
const boardId = '601c710a7ce9358cfd8fd601';

const Teste = () => {
  const [lists, setLists] = useState([]);
  const [boardLabels, setBoardLabels] = useState([]);
  const [idLabels, setIdLabels] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const listsResponse = await axios.get(
        `${baseUrl}/1/boards/${boardId}/lists?key=${key}&token=${token}`
      );
      setLists(listsResponse.data);

      const labelsResponse = await axios.get(
        `${baseUrl}/1/boards/${boardId}/labels?key=${key}&token=${token}`
      );
      setBoardLabels(labelsResponse.data);
    };

    fetchData();
  }, []);

  const handleSubmit = async ({
    idList,
    name,
    desc,
    due,
    dueComplete,
    pos,
  }) => {
    await axios.post(
      `${baseUrl}/1/cards?key=${key}&token=${token}&idList=${idList}&name=${name}&desc=${desc}&due=${due}&dueComplete=${dueComplete}&pos=${pos}&idLabels=${idLabels}`
    );
  };

  return (
    <div className='container'>
      <h1>Novo Card</h1>
      <Formik
        initialValues={{
          idList: '',
          name: '',
          desc: '',
          due: '',
          dueComplete: false,
          pos: 'bottom',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='form'>
          <Dropdown label='Listas' name='idList'>
            <option value=''>Lista onde vai o card</option>
            {lists.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </Dropdown>

          <TextInput
            label='Nome'
            name='name'
            type='text'
            placeholder='Nome do card'
          />

          <TextArea name='desc' placeholder='Descrição' />

          <TextInput label='Data' name='due' type='date' />

          <Checkbox name='dueComplete'>Já concluído</Checkbox>

          <RadioGroup label='Posição'>
            <RadioInput name='pos' value='top'>
              Primeira
            </RadioInput>
            <RadioInput name='pos' value='bottom'>
              Última
            </RadioInput>
          </RadioGroup>

          <BoardLabels
            labels={boardLabels}
            idLabels={idLabels}
            setIdLabels={setIdLabels}
          />

          <button type='submit'>Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Teste;
