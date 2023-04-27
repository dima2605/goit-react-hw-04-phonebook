import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const PhonebookForm = styled(Form)`
  margin-bottom: 10px;
`;

export const PhonebookInput = styled(Field)`
  margin-bottom: 10px;
  padding: 5px 10px;

  width: 250px;
  height: 25px;

  border-radius: 4px;
  border: 1px solid black;
`;

export const InputDescr = styled.p`
  display: block;
  margin-bottom: 5px;

  font-size: 17px;
  line-height: 1.3;
  color: gray;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5px 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  background: #f5f4fa;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;
  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const ErrMessage = styled.p`
  display: inline-block;

  margin-left: 5px;
  font-size: 15px;
  line-height: 1.3;

  color: red;
`;
