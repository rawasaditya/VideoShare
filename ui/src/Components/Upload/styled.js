import styled from "styled-components";
import { Button as Btn } from "../Menu/styled";
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
const Wrapper = styled.div`
  width: 37rem;
  height: 37rem;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;
const Title = styled.h2`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 0.3rem;
  padding: 1rem;
  background-color: transparent;
`;

const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 0.3rem;
  padding: 1rem;
  background-color: transparent;
  height: 8rem;
`;

const Button = styled(Btn)`
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.soft};
  padding: 1rem;
  border-radius: 0.3rem;
`;

const Label = styled.label`
  color: #3ea6ff;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.soft};
  padding: 1rem;
  border-radius: 0.3rem;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;
`

export { Container, Wrapper, Close, Title, Input, TextArea, Button, Label, Form };
