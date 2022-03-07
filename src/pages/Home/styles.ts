import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
`;

export const Header = styled.div`
 width: 100%;
 height: 200px;
background: ${({ theme }) => theme.black};
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
height: 100% ;
display: flex;
align-items: center;
justify-content: center;
`;
export const Content = styled.div`
width: 100vw;
height: 100vh ;
margin-left: 40px ;
display: grid ;
grid-template-columns: repeat(5, auto);

 `;