import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh ;
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
height: 100% ;
display: flex;
align-items: center;
justify-content: center;
`;
export const Content = styled.div`
width: 100%;
height: 100% ;
padding: 20px 20px;
display: grid ;
gap: 15px ;
grid-template-columns: repeat(3, 1fr);
@media screen and (max-width: 1250px){
padding: 30px 0px 0px 0px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
};
 `;