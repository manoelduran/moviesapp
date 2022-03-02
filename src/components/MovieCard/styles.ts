import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
width: 50%;
margin-top: 30px;
margin-bottom: 30px;
border-radius: 0 2rem 2rem 0;
height: 200px;
background: ${({ theme }) => theme.gray_light};
&:hover {
    background: ${({ theme }) => darken(0.05, theme.hover_gray_light)};
  };
  @media screen and (max-width: 520px){
width: 75%;
};
`;

export const ButtonCard = styled.button`
border: none;
background-color: transparent;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
`;
export const Details = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const Title = styled.h1`
font-size: 1rem;
margin-top: -30px;
padding-left: 15px;
text-align: start;
color: ${({ theme }) => theme.black};
`;

export const Poster = styled.img`
width: 100px;
height: 200px;
`;

export const DescriptionContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`;

export const Label = styled.span`
 margin-top: 10px;
font-size: 0.8rem;
padding-left: 15px;
color: ${({ theme }) => theme.black};
 `;

export const Description = styled.p`
margin-left: 15px;
margin-top: 10px;
font-size: 0.9rem;
color: ${({ theme }) => theme.hover_purple};
`;



