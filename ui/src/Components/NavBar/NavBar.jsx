import {Container, Input, SearchWrapper, Wrapper} from './styled'
import {Button} from '../Menu/styled'
import {User, Search} from 'react-feather'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
          <SearchWrapper>
            <Input placeholder='Search'/>
            <Search size={20}/>
          </SearchWrapper>
          <Link to="/signin" style={{textDecoration:"none"}}>
          <Button>
              <User size={20}/>
              Sign in
            </Button>
          </Link>
      </Wrapper>
    </Container>
  )
}

export default NavBar