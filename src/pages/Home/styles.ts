import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
`;

 export const Header = styled.div`
 width: 100%;
 height: 150px;
 background-color: lightblue;
 padding: 50px 25px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 `;
 export const Title = styled.h1`

 text-align: center;
 `;
 export const Content = styled.div`
     display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    justify-content: center;
 `;