import styled from "styled-components";


const Container = styled.div``
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`;
const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;
const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme})=>theme.soft};
background-color: transparent;
padding: 1rem;
outline: none;
width: 100%;
color: ${({theme})=>theme.text};
`;

export {Container,NewComment, Avatar, Input}