import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
`;

export const Header = styled.div`
 width: 100%;
 height: 200px;
background: ${({ theme }) => theme.purple};
padding: 30px 25px;
display: flex ;
justify-content: center;
align-items: center;
 `;
export const Title = styled.h1`
font-size: 1.5rem;
 text-align: center;
 color: ${({ theme }) => theme.white_details};
 `;

export const Poster = styled.img`
margin-left: 30px;
border-radius: 50%;
border: 5px solid ${({ theme }) => theme.black};
&:hover {
    border: 5px solid ${({ theme }) => theme.hover_purple};
  };
  @media screen and (max-width: 450px){
    border: none;
    margin-left: 0px;
    border-radius: 0%;
    height: 400px;
    width: 100%;
};
`;

export const Content = styled.div`
width: 100%;
margin-top: 7rem;
display: flex;
align-items: center;
@media screen and (max-width: 450px){
  margin-top: 0rem;
display: flex ;
flex-direction: column;
align-items: center;
justify-content: center;
};
`;
export const Label = styled.h1`
font-size: 1.5rem;
margin-left: 30px;
 text-align: start;
 color: ${({ theme }) => theme.black};
 @media screen and (max-width: 800px){
font-size: 1.2rem;
};
@media screen and (max-width: 450px){
font-size: 1rem;
margin-top: 15px;
margin-left: 15px;
};
 `;
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

export const Details = styled.div``;