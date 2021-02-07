import * as Yup from 'yup';

const validationSchema = Yup.object({
  idList: Yup.string().required('Selecione uma lista'),
  name: Yup.string().required('Insira um nome'),
  desc: Yup.string()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres')
    .required('Insira uma descrição'),
  due: Yup.date().required('Escolha uma data'),
  dueComplete: Yup.boolean().required(),
  pos: Yup.string()
    .matches(/(top|bottom)/)
    .required(),
});

export default validationSchema;
