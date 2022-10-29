import {useState,useEffect} from 'react'
import Card from '../../Card/Card'
import {Container} from './styled'
import axios from 'axios'
const Home = ({type, setvideos, videos}) => {


  useEffect(() => {
    const fetchVideos = async () =>{
      const res = await axios.get(`video/${type}`);
      setvideos(res.data)
    }
    fetchVideos()
  }, [type]);

  return (
    <Container>
      {
        videos.length ? videos.map(i=><Card key={i._id} video={i}/>) : <></>
      }        
    </Container>
  )
}

export default Home