import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
`;

export const Header = styled.div`
 width: 100%;
 height: 150px;
 background: ${({ theme }) => theme.purple};
 padding: 50px 25px;
 display: flex;
 align-items: center;

 `;
export const Title = styled.h1`
font-size: 1.5rem;
 text-align: center;
 color: ${({ theme }) => theme.white_details};
 `;

export const Poster = styled.img`
margin-left: 30px;
margin-top: 7rem;
border-radius: 50%;
border: 5px solid ${({ theme }) => theme.black};
&:hover {
    border: 5px solid ${({ theme }) => theme.hover_purple};
  }
`;

export const Content = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

export const Popularity = styled.p``;
export const Overview = styled.p``;

export const Details = styled.div``;