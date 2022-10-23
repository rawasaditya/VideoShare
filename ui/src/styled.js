import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: ${({theme})=>theme.bg};
  color: ${({theme})=>theme.text};

`;

const Wrapper = styled.div``;
const Main = styled.div`
  flex: 7;
`;
export  {Container,Wrapper, Main};
