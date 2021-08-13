import React from "react";
import styled from 'styled-components';

const Photo = props => {

  const { title, description, imageURL, date, copyright } = props;

  return (
          
            <Container>
               <Header>NASA's Astronomy Picture of The Day</Header>
                <Date>{date}</Date>
               <Title> {title}</Title>
                <Description>{description}</Description>
                <img src={imageURL} alt="N/A" />
                <Copyright>{copyright}</Copyright>
            </Container>
    );
}


const Container = styled.div`
border-radius: 10px;
background-color: #003566;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 10px;
border: solid 10px #000814;`

const Title = styled.h2`
color: #ffc300;
font-family: 'Space Mono', monospace;
`
const Header = styled.h1`
padding: 2%;
color: #ffc300;
font-family: 'Space Mono', monospace;
`
const Date = styled.p`
color: #ffd60a;
`
const Description = styled.p`
padding-left: 14%;
padding-right: 14%;
color: #E2E5E2;
font-family: 'Space Mono', monospace;
`

const Copyright = styled.p`
color: red;
`

export default Photo;  