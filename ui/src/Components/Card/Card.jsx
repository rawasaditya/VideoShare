import {ChannelName, ChannelImage, Container, Details, Image, Info, Texts, Title} from './styled'
import {Link} from 'react-router-dom'
const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container type={type}>
        <Image type={type} src="https://i.ytimg.com/vi/XxXyfkrP298/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpl3BqExA8ZhTy3shFJ2pKq3QZTQ" />
        <Details type={type}>
            <ChannelImage type={type} src='https://yt3.ggpht.com/yti/AJo0G0lqFARvplQAVB-Yt8if4f7HLRrjBSvGCjau8yf9=s88-c-k-c0x00ffffff-no-rj-mo' />
            <Texts>
                <Title>Test Video</Title>
                <ChannelName>Aditya</ChannelName>
                <Info>660,908 views . 1 day agos</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card