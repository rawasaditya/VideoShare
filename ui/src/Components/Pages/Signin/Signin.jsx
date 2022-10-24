import React, { useState } from "react";
import { Container, Wrapper, Title, SubTitle, Input, Button } from "./styled";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from "../../../redux/useSlice";
const Signin = () => {
  const [username, setUsername] = useState(null);
  const [userpassword, setPassword] = useState(null);
  const [useremail, setEmail] = useState(null);
  const dispatch = useDispatch();
  
  const login = async (e) => {
    try {
      dispatch(loginStart());
      const res = await axios.post("/auth/signin", {
        userName: username,
        password: userpassword,
      });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure())
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Signin</Title>
        <SubTitle>to continue to AdiShare</SubTitle>
        <Input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="password"
          value={userpassword}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button onClick={login}>Sign In</Button>
        <Title>or</Title>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <Input
          value={useremail}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="email"
        />
        <Input
          value={userpassword}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <Button>Sign Up</Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
