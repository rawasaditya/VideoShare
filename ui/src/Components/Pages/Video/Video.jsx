import {
  Container,
  Content,
  VideWrapper,
  Title,
  Details,
  Info,
  Button,
  Buttons,
  Channel,
  ChannelInfo,
  Subscribe,
  Image,
  ChannelDetails,
  ChannelName,
  ChannelCounter,
  ChannelDescription,
  VideoFrame
} from "./styled";
import { Hr } from "../../Menu/styled";
import { ThumbsDown, ThumbsUp } from "react-feather";
import CommentInput from "../../CommentInput/CommentInput";
import Comments from "../../Comments/Comments";
import Card from "../../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../../../redux/videoSlice";
import moment from "moment";
import { subscription } from "../../../redux/useSlice";
import CommentsContainer from "../../CommentsContainer/CommentsContainer";
import Recommendation from "../../Recommendation/Recommendation";
const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const [video, setVideo] = useState({});
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`video/find/${path}`);
        const channelRes = await axios.get(
          `users/find/${videoRes.data.userId}`
        );
        dispatch(fetchSuccess(videoRes.data));
        setChannel(channelRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [path]);

  const handelLike = async () => {
    await axios.put(`users/like/${currentVideo?._id}`);
    dispatch(like(currentUser?._id));
  };
  const handelDisLike = async () => {
    await axios.put(`users/dislike/${currentVideo?._id}`);
    dispatch(dislike(currentUser?._id));
  };

  const handelSubscription = async () => {
    await axios.put(`http://localhost:8800/api/v1/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  const handelunSubscription = async () => {
    await axios.put(`http://localhost:8800/api/v1/users/unsub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      <Content>
        <VideWrapper>
          <VideoFrame  src={`http://localhost:8800/video/${currentVideo?.video}`} controls />        </VideWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} view .{" "}
            {moment(currentVideo?.createdAt).format("MMM DD, YYYY")}
          </Info>
          <Buttons>
            <Button onClick={handelLike}>
              {currentVideo?.likes.includes(currentUser?._id) ? (
                <ThumbsUp size={20} fill="#fff" />
              ) : (
                <ThumbsUp size={20} />
              )}
              {currentVideo?.likes?.length}
            </Button>
            <Button onClick={handelDisLike}>
              {currentVideo?.dislikes.includes(currentUser?._id) ? (
                <ThumbsDown size={20} fill="#fff" />
              ) : (
                <ThumbsDown size={20} />
              )}
              Dislike
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.profilePicture} />
            <ChannelDetails>
              <ChannelName>{`${channel.firstName} ${channel.lastName}`}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <ChannelDescription>
                {currentVideo?.description}
              </ChannelDescription>
            </ChannelDetails>
          </ChannelInfo>
          {currentUser?.subscribedUsers?.includes(channel?._id) ? (
            <Subscribe onClick={handelunSubscription}>UnSubscribed</Subscribe>
            ) : (
              <Subscribe onClick={handelSubscription}>Subscribed</Subscribe>
          )}
        </Channel>
        <Hr />
            <CommentsContainer videoId={currentVideo?._id}/>
      </Content>
      <Recommendation tags={currentVideo?.tags} currentVideoId={currentVideo?._id}/>
    </Container>
  );
};

export default Video;
