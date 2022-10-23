import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: ${({theme})=>theme.bg};
  color: ${({theme})=>theme.text};

`;

const Wrapper = styled.div`
  padding: 2rem 3rem;
`;
const Main = styled.div`
  flex: 7;
`;
export  {Container,Wrapper, Main};
