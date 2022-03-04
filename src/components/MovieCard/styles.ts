import styled from 'styled-components';

interface BackgroundImageProps {
  imgUrl: string;
}

export const Container = styled.div<BackgroundImageProps>`
width: 350px;
height: 350px;
margin-top: 30px;
background-image: url(${(props)=>props.imgUrl}); 
  @media screen and (max-width: 520px){
width: 75%;
};
`;

export const ButtonCard = styled.a`
width: 100%;
`;
export const Details = styled.div`

width: 100%;
display: flex;
flex-direction: column;
`;
export const Title = styled.h1`
font-size: 1rem;
text-align: start;
color: ${({ theme }) => theme.black};
`;

export const Poster = styled.img`
width: 100%;
`;

export const DescriptionContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`;

export const Label = styled.span`
font-size: 0.8rem;
color: ${({ theme }) => theme.black};
 `;

export const Description = styled.p`
font-size: 0.9rem;
color: ${({ theme }) => theme.hover_purple};
`;



