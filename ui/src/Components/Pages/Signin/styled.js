import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: ${({ theme }) => theme.soft};
  padding: 1.2rem 6rem;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const SubTitle = styled.h2`
font-size: 0.9rem;
font-weight: 300;
`;

const Input = styled.input`
border: 1px solid ${({theme})=>theme.soft};
border-radius: 0.2rem;
outline: none;
padding: 0.7rem;
background-color: transparent;
width: 100%;
color: ${({theme})=>theme.textSoft};

`;

const Button = styled.button`
border-radius: 0.2rem;
border: none;
padding: 0.5rem 1.5rem;
font-weight: 500;
cursor: pointer;
background-color: ${({theme})=>theme.soft};
color: ${({theme})=>theme.textSoft};
`;



export { Container, Wrapper, Title, SubTitle, Input, Button };
