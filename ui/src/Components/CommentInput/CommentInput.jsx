import {Avatar, Container, Input, NewComment} from './styled'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
const CommentInput = ({videoId, setcomments}) => {
  const user = useSelector(state=>state.user.currentUser)
  const [comment, setcomment] = useState("");

const addComment = async (comm) =>{
  const comment = await axios.post("comments",{
    "videoid":videoId,
    "comments":comm
  })

  setcomments(prev=>[comment.data,...prev])
  setcomment("")

}

  const handelComment = (e) => {
    if(e.which === 13){
      addComment(e.target.value)
    }
  }
  return (
    <Container>
      <NewComment>
        <Avatar src={user?.profilePicture} />
        <Input placeholder="Add a comment..." value={comment} onKeyDown={handelComment} onChange={e=>setcomment(e.target.value)}/>
      </NewComment>
    </Container>
  )
}

export default CommentInput