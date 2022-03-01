import { darken } from 'polished';
import styled from 'styled-components';
export const Container = styled.div`
margin-top: 30px;
border-radius: 0 2rem 2rem 0;
width: 50%;
height: 200px;
background: ${({theme}) => theme.gray_light};
&:hover {
    background: ${({ theme }) => darken(0.05, theme.hover_gray_light)};
  }
`;

export const ButtonCard = styled.button`
border: none;
background-color: transparent;
display: flex;
flex-direction: row;
align-items: flex-start;

`;

export const Title = styled.h1`
margin-top: 1rem;
font-size: 2rem;
align-self: flex-start;
`;

export const Poster = styled.img`
width: 100px;
height: 200px;
`;

export const Details = styled.div`
margin-left: 15px;
`;

export const Description = styled.p`
margin-top: 10px;
font-size: 1rem;
text-align: start;
`;



