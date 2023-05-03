import { Formik, Field } from 'formik';
import { Form, ErrorMessage } from './Form.styled';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

// const  phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  number: Yup.number()
    //  .max(12,'this number must be less longer then 12 symbols')
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required('Required field'),
});

export const ContactForm = ({ onAdd }) => {
  // const nameId = nanoid();
  // const numberId = nanoid();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Name </label>
        <Field name="name" />
        <ErrorMessage name="name" component="span" />
        <label>Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
// }

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
