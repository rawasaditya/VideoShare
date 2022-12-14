import React from "react";
import {
  Container,
  Wrapper,
  Logo,
  Img,
  Item,
  Hr,
  Login,
  Button,
} from "./styled";
import LogSrc from "../../../img/logo.png";
import {
  Home,
  Compass,
  Inbox,
  Clock,
  Play,
  ThumbsUp,
  Settings,
  User,
  Sun,
  Moon,
} from "react-feather";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Menu = ({ setTheme, theme }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LogSrc} />
            AdiShare
          </Logo>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <Home size={20} />
            Home
          </Item>
        </Link>
        <Link
          to="/explore"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <Compass size={20} />
            Explore
          </Item>
        </Link>

        <Link
          to="/subscription"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <Inbox size={20} />
            Subscription
          </Item>
        </Link>
        <Hr />
        <Item>
          <Play size={20} />
          Library
        </Item>
        <Item>
          <Clock size={20} />
          History
        </Item>
        <Link
          to="/liked"
          style={{ textDecoration: "none", color: "inherit" }}
        >
        <Item>
          <ThumbsUp size={20} />
          Liked
        </Item>
        </Link>
        <Hr />
        {currentUser ? (
          <></>
        ) : (
          <>
            <Login>
              <small style={{ color: "#696969", display: "block" }}>
                Sign in to like ,comment and subscribe.
              </small>
              <Link
                to="/signin"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button>
                  <User size={15} />
                  Sign in
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}

        <Item>
          <Settings size={20} />
          Settings
        </Item>
        <Item onClick={() => setTheme((prev) => !prev)}>
          {theme ? <Sun size={20} /> : <Moon size={20} />}
          {theme ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
