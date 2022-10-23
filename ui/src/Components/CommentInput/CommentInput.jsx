import {Avatar, Container, Input, NewComment} from './styled'

const CommentInput = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://yt3.ggpht.com/yti/AJo0G0lqFARvplQAVB-Yt8if4f7HLRrjBSvGCjau8yf9=s88-c-k-c0x00ffffff-no-rj-mo" />
        <Input placeholder="Add a comment..." />
      </NewComment>
    </Container>
  )
}

export default CommentInput