import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`;

export const Header = styled.div`
 width: 100%;
 height: 200px;
background: ${({theme}) => theme.purple};
padding: 30px 25px;
display: flex ;
flex-direction: column;
align-items: center;
 `;
export const Title = styled.h1`
color: ${({theme}) => theme.white_details};
 `;

export const Content = styled.div`
     width: 100%;
     padding: 30px 25px;
   display: grid;
    grid-template-columns: repeat(2, 50%);
 `;

export const MessageContainer = styled.div`
margin-top: 10rem;
display: flex;
align-items: center;
justify-content: center;
`;

export const Message = styled.p`

 `;