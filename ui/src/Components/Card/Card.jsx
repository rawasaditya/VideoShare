import {useState, useEffect} from 'react'
import {
  ChannelName,
  ChannelImage,
  Container,
  Details,
  Image,
  Info,
  Texts,
  Title,
} from "./styled";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from 'axios';
const Card = ({ type, video }) => {

  const [user, setuser] = useState({});

  useEffect(() => {
    const fetchUsers = async () =>{
      const user = await axios.get(`users/find/${video.userId}`);
      setuser(user.data)
    }
    fetchUsers()
  }, [video.userId]);
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Image type={type} src={video.thumbnail} />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={user.profilePicture}
            alt={`${user.firstName} ${user.lastName}`}
          />
      
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{user.firstName} {user.lastName}</ChannelName>
            <Info>
              {video.views} views . {moment(video.createdAt).fromNow()}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
