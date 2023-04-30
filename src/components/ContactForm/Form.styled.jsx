import styled from 'styled-components';
import { Form as FormOfContacts,ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormOfContacts)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

  label {
    padding-left: 20px;
margin-bottom: 10px;
    display: block;
    font-size: 18px;
    color: #666;
   
    cursor: pointer;
  }

  input {
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 40px;
    font-size: 20px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    border: 1px solid #999;
    outline: none;
    margin-bottom: 15px;

    &:focus {
      border-color: #ff6f00;
    }
  }

  button {
    margin-top: 30px;
    font-size: 16px;
    max-width: 170px;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #ff6f00;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    cursor: pointer;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background: darken(#ff6f00, 5%);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0px 10px 15px -6px rgba(88, 85, 85, 0.2);
    }
  }
`;


export const ErrorMessage = styled(FormikError)`
margin-bottom: 20px;
  font-size: 14px;
  padding-left: 20px;
  color:red;
  /* color: {p => p.theme.color.accent} */
`