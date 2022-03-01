import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`;

export const Header = styled.div`
 width: 100%;
 height: 200px;
 background-color: lightblue;
padding: 30px 25px;
display: flex ;
flex-direction: column;
align-items: center;
 `;
export const Title = styled.h1`

 `;
export const Content = styled.div`
     width: 100%;
     padding: 30px 25px;
justify-content: space-around;
   display: grid;
    grid-template-columns: repeat(2, 50%);
 `;