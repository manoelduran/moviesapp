import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: ${({ theme }) => theme.black} ;
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
font-size: 2.5rem;
 text-align: center;
 color: ${({ theme }) => theme.white_details};
 `;

export const NameContainer = styled.div`
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
`;

export const DateInfo = styled.div`
width: 100% ;
margin-top: 0.5rem ;
display:  flex;
align-items: center ;
justify-content: space-around ;
`;


export const Details = styled.div`
width: 60%;
`;


export const Overview = styled.p`
text-align:  center;
font-size: 1rem;
padding: 30px;
color: ${({ theme }) => theme.white_details};
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
height: 100vh;
border-radius: 100% 30% 100% 30% ;
  @media screen and (max-width: 450px){
    border: none;
    margin-left: 0px;
    border-radius: 0%;
    height: 400px;
    width: 100%;
};
`;

export const Popularity = styled.span`
width: 100% ;
 color: ${({ theme }) => theme.rate};

 padding-left: 10rem ;
 text-align: left ;
`;
export const ReleaseDate = styled.span`
font-size: 1.2rem ;
 color: ${({ theme }) => theme.white_details};
 text-align: left ;
`;
export const Language = styled.span`
font-size: 1.2rem ;
 text-align: center;
`;

export const Trailer = styled.button`
width: 30%;
height: 50px ;
display: flex ;
border-radius: 12px ;
align-items: center ;
justify-content: space-evenly;
border: none ;
background-color: ${({ theme }) => theme.black} ;
border: 1px solid ${({ theme }) => theme.border};
`;

export const ButtonText = styled.span`
font-size: 1.2rem ;
 color: ${({ theme }) => theme.white_details};
`;