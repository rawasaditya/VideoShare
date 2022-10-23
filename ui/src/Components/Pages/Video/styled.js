import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;

const VideWrapper = styled.div``;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.9rem;
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 1rem;
`;
const Subscribe = styled.button`
  text-transform: uppercase;
  background-color: #cc1a00;;
  font-weight: 500;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 0.8rem;
  cursor: pointer;
`;

const Image = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;
const ChannelDetails = styled.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};

`;
const ChannelName = styled.div`
font-weight: 500;

`;
const ChannelCounter = styled.div`
margin-top: 0.5rem;
margin-bottom: 2rem;
font-size: 0.8rem;
color: ${({ theme }) => theme.textSoft};
`;
const ChannelDescription = styled.div`
font-size: 0.9rem;
`;

export {
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
};
