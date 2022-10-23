import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0; ;
`;

const Wrapper = styled.div`
  padding: 1.2rem 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  margin-bottom: 1.3rem;
  font-size: 1.3rem;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 0;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 1.2rem 0;
  border: 0.1rem solid ${({ theme }) => theme.textSoft}; ;
`;
const Login = styled.div``;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
`;

export { Container, Wrapper, Logo, Img, Item, Hr, Login, Button };
