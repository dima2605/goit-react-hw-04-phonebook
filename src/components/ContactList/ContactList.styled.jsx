import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid black;
  border-bottom: none;
  :last-child {
    border-bottom: 1px solid black;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
  padding: 3px 10px;
  font-weight: 200px;
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
