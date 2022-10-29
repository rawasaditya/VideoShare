import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 3rem;
  padding: 0.5rem 0;
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
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.bg};
  border-radius: 0.2rem;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  outline: none;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-weight: 500;
  border: 0px solid ${({ theme }) => theme.text};

  & > svg {
    cursor: pointer;
  }
`;

export { Container, Wrapper, SearchWrapper, Input, UserContainer };
