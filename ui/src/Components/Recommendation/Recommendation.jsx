import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import { Container } from './styled'

const Recommendation = ({tags, currentVideoId}) => {
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        const fetchVideos = async () =>{
            const res = await axios.get(`video/tags?tags=${tags}`)
            setvideos(res.data)
        }
        fetchVideos();
    }, []);
  return (
    <Container>
        {
            videos.length ? videos.map(i=>{
                if(i._id != currentVideoId){
                    return <Card type="sm" video={i}/>
                }
            }) : <></>
        }
    </Container>
  )
}

export default Recommendation