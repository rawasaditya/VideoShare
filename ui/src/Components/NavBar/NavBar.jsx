import {Container, Input, SearchWrapper, Wrapper} from './styled'
import {Button} from '../Menu/styled'
import {User, Search} from 'react-feather'
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
          <SearchWrapper>
            <Input placeholder='Search'/>
            <Search size={20}/>
          </SearchWrapper>
          <Button>
              <User size={20}/>
              Sign in
            </Button>
      </Wrapper>
    </Container>
  )
}

export default NavBar