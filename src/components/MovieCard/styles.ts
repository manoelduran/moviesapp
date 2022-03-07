import styled from 'styled-components';

interface BackgroundImageProps {
  imgUrl: string;
}

export const Container = styled.div<BackgroundImageProps>`
width: 220px;
height: 330px;
margin-top: 15px;
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
height: 100% ;
display: flex;
flex-direction: column;
justify-content: space-between ;
`;
export const Title = styled.h1`
width:100%;
font-size: 1.5rem;
align-self: left ;
text-align: left;
color: ${({ theme }) => theme.white_details};
`;



export const DescriptionContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`;

export const Description = styled.p`
font-size: 1.2rem;
color: ${({ theme }) => theme.rate};
`;



