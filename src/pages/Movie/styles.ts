import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: ${({theme}) => theme.purple} ;
`;

export const Content = styled.div`
width: 100%;
height: 100% ;
display: flex;
justify-content: space-between ;
align-items: center;
@media screen and (max-width: 450px){
  margin-top: 0rem;
display: flex ;
flex-direction: column;
align-items: center;
justify-content: center;
};
`;


export const Info = styled.div`
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: space-between ;
`;

export const Title = styled.h1`
font-size: 1.5rem;
 text-align: center;
 color: ${({ theme }) => theme.black};
 `;

export const NameContainer = styled.div`
display: flex ;
align-items: center ;
justify-content: center ;
`;


export const Details = styled.div``;

export const Overview = styled.p`
margin-top: 0px 15px 0px 0px;
margin-left: 30px;
text-align: justify;
font-size: 0.9rem;
padding: 15px;
color: ${({ theme }) => theme.black};
@media screen and (max-width: 800px){
  text-align: justify;
font-size: 0.6rem;
};
@media screen and (max-width: 450px){
  text-align: start;
font-size: 0.5rem;
margin-left: 15px;
};
`;

export const Poster = styled.img`
width: 400px;
height: 100vh;
  @media screen and (max-width: 450px){
    border: none;
    margin-left: 0px;
    border-radius: 0%;
    height: 400px;
    width: 100%;
};
`;