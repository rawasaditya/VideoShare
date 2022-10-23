import {
  Container,
  Content,
  Recommendation,
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
} from "./styled";
import { Hr } from "../../Menu/styled";
import { ThumbsDown, ThumbsUp } from "react-feather";
import CommentInput from "../../CommentInput/CommentInput";
import Comments from "../../Comments/Comments";
const Video = () => {
  return (
    <Container>
      <Content>
        <VideWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideWrapper>
        <Title>React Node.js Booking App</Title>
        <Details>
          <Info>7,948,154 view . Jan 22, 2022</Info>
          <Buttons>
            <Button>
              {" "}
              <ThumbsUp size={20} /> 2.1K
            </Button>
            <Button>
              <ThumbsDown size={20} /> Dislike
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/yti/AJo0G0lqFARvplQAVB-Yt8if4f7HLRrjBSvGCjau8yf9=s88-c-k-c0x00ffffff-no-rj-mo" />
            <ChannelDetails>
              <ChannelName>Aditya Rawas</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                cum sapiente odio tenetur, labore natus amet magni nulla ipsam
                minus quod, maxime inventore asperiores mollitia dolorem, sed
                aliquid eum? Similique.
              </ChannelDescription>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <CommentInput />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />

      </Content>
      <Recommendation>Rec</Recommendation>
    </Container>
  );
};

export default Video;
