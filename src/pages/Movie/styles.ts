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
  }
`;

export const Content = styled.div`
width: 100%;
margin-top: 7rem;
display: flex;
align-items: center;

`;

export const Overview = styled.p`
margin-left: 30px;
text-align: center;
font-size: 0.9rem;
color: ${({ theme }) => theme.black};
`;

export const Details = styled.div``;