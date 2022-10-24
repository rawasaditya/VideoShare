import { Container, Input, SearchWrapper, Wrapper, UserContainer } from "./styled";
import {Avatar} from '../CommentInput/styled'
import { Button } from "../Menu/styled";
import {  Search, User } from "react-feather";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <SearchWrapper>
          <Input placeholder="Search" />
          <Search size={20} />
        </SearchWrapper>
        <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
          {currentUser ? (
           <UserContainer>
            <Avatar src={currentUser.profilePicture}/>
            </UserContainer>
          ) : (
            <Button>
              <User size={20} />
              Sign in
            </Button>
          )}
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
