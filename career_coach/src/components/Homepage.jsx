import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;


const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    `
const Right=  styled.div``;
const Title=  styled.div`
    font-size: 74px;
    
`;
const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

`;
const Subtitle = styled.h2`
    font-size: 24px;
    color: lightgray;

`;
const Desc = styled.p``;
const Img = styled.img`
    width: 800px;
    height: 800px;
    object-fit: contain;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
    @keyframes animate {
        100%{
            transform: translateY(50px);
            transform: translateX(50px);

        }
    }

`;


const HomePage = () => {
    return (
        <Section> 
            <Container> 
                <Left>
                    <Title> Welcome to Career Coach </Title>
                    <Subtitle> A personalized AI chatbot to help you with your career paths </Subtitle>
                    <Button> Scroll down! </Button>
                </Left>
                <Right>
                    <Img src= "/../../r2d2.jpg" 
                    />
                </Right>
            </Container> 
        </Section>


    )
}

export default HomePage; 