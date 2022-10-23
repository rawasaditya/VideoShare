import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 3rem;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 12.625rem;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.7rem;
`;

const ChannelImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #999;
`;
const Texts = styled.div``;
const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;
const ChanelName = styled.h3`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;
const Info = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
`;

export {
  Container,
  Details,
  Image,
  ChannelImage,
  Texts,
  Title,
  ChanelName,
  Info,
};
