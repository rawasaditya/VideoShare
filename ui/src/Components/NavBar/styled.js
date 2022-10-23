import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 2rem;
  position: relative;
`;
const SearchWrapper = styled.div`
position:absolute;
left: 0;
right: 0;
margin: auto;
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem;
border: 1px solid ${({theme})=>theme.bg.soft};
border-radius: 0.2rem;
`;
const Input = styled.input`
border: none;
background-color: transparent;
width: 100%;
outline: none;
`;

export { Container, Wrapper, SearchWrapper, Input };
