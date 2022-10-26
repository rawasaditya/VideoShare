import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Container, Avatar, Name, Date, Text, Details } from "./styled";
const Comments = ({comment}) => {

    const [userDetails, setuserDetails] = useState({});

    useEffect(() => {
        try{
            const fetchDetails = async () => {
             const user =  await axios(`users/find/${comment.userid}`)
             setuserDetails(user.data)
            }
            fetchDetails();
        }catch(err){
          console.error(err)
        }
    }, []);

    return (
      <Container>
        <Avatar src={userDetails.profilePicture} />
        <Details>
          <Name>
            {userDetails.firstName} {userDetails.lastName} <Date>{moment(comment?.createdAt).fromNow()}</Date>
          </Name>
          <Text>
           {comment.comments}
          </Text>
        </Details>
      </Container>
    )
};

export default Comments;
