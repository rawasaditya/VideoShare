import {
  Container,
  Input,
  SearchWrapper,
  Wrapper,
  UserContainer,
} from "./styled";
import { Avatar } from "../CommentInput/styled";
import { Button } from "../Menu/styled";
import { Search, User } from "react-feather";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Video } from "react-feather";
import { useState } from "react";
import Upload from "../Upload/Upload";
const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <SearchWrapper>
            <Input placeholder="Search" />
            <Search size={20} />
          </SearchWrapper>
          {currentUser ? (
            <UserContainer>
              <Video size={25} onClick={() => setOpen(true)}/>
              <Avatar src={currentUser.profilePicture} />
            </UserContainer>
          ) : (
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <User size={20}  />
                Sign in
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen}/>}
    </>
  );
};

export default NavBar;
