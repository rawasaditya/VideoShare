import React from "react";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Input,
  Button,
} from "./styled";
const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Signin</Title>
        <SubTitle>to continue to AdiShare</SubTitle>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <Button>Sign Up</Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
