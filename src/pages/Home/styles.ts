import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
`;

export const Header = styled.div`
 width: 100%;
 height: 200px;
background: ${({ theme }) => theme.black};
padding: 30px 0px;
display: flex ;
flex-direction: column;
align-items: center;
 `;
export const Title = styled.h1`
color: ${({ theme }) => theme.red};
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

height: 100% ;
display: grid ;
gap: 10px ;

@media screen and (max-width: 1900px){
  grid-template-columns: repeat(7, auto);
};
@media screen and (max-width: 1750px){
  grid-template-columns: repeat(6, auto);
};
@media screen and (max-width: 1550px){
  grid-template-columns: repeat(5, auto);
};
@media screen and (max-width: 1250px){
  grid-template-columns: repeat(4, auto);
};
@media screen and (max-width: 1050px){
  grid-template-columns: repeat(3, auto);
};
@media screen and (max-width: 750px){
  grid-template-columns: repeat(2, auto);
};
@media screen and (max-width: 550px){
  grid-template-columns: repeat(1, auto);
};
 `;