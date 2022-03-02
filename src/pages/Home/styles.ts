import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`;

export const Header = styled.div`
 width: 100%;
 height: 200px;
background: ${({ theme }) => theme.purple};
padding: 30px 25px;
display: flex ;
flex-direction: column;
align-items: center;
 `;
export const Title = styled.h1`
color: ${({ theme }) => theme.white_details};
@media screen and (max-width: 520px){
  text-align: center;
font-size: 1.5rem;
};
@media screen and (max-width: 400px){
  text-align: center;
font-size: 1.3rem;
};
 `;
export const ContentContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
export const Content = styled.div`
width: 100%;
padding: 30px 0px 0px 200px;
display: grid;
grid-template-columns: repeat(2, 1fr);
@media screen and (max-width: 1250px){
padding: 30px 0px 0px 0px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
};
 `;

export const MessageContainer = styled.div`
margin-top: 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Message = styled.p`
font-size: 2rem;
color: ${({ theme }) => theme.hover_purple};
@media screen and (max-width: 525px){
font-size: 1.5rem;
text-align: center;
};
@media screen and (max-width: 400px){
font-size: 1.3rem;
text-align: center;
};
 `;