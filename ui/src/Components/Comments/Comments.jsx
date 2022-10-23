import {Container, Avatar, Name, Date, Text, Details} from './styled'

const Comments = () => {
  return (
    <Container>
              <Avatar src="https://yt3.ggpht.com/yti/AJo0G0lqFARvplQAVB-Yt8if4f7HLRrjBSvGCjau8yf9=s88-c-k-c0x00ffffff-no-rj-mo" />
              <Details>
                <Name>Jhon Doe  <Date>1 Day ago</Date></Name>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis et quidem doloremque est, optio, nam aliquam eaque, quisquam velit non sed. Perspiciatis alias qui nesciunt, exercitationem laboriosam non corporis.
                </Text>
              </Details>
    </Container>
  )
}

export default Comments