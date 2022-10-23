import styled from "styled-components";
import { Avatar } from "../CommentInput/styled";
const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;



const Name = styled.span`
font-size: 0.8rem;
font-weight: 5;
`;

const Date = styled.span`
font-size: 0.6rem;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 0.4rem;
`;

const Text = styled.span`
font-size: 0.9rem;
`;

export { Container, Avatar,  Name, Date, Text, Details };
