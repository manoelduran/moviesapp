import styled from 'styled-components';

export const Container = styled.div`
margin-top: 2.5rem;
`;

export const Input = styled.input`
width: 800px;
height: 40px;
display: flex;
border-radius: 5px;
align-items: center;
padding: 0.5rem;
justify-content: center;
background: ${({ theme }) => theme.white_details};
color: ${({ theme }) => theme.black};
border: 1px solid ${({ theme }) => theme.border};
::placeholder {
    justify-content: center;
    align-items: center;
        color: ${({ theme }) => theme.black};
   };
   @media screen and (max-width: 900px){
    width: 600px;
};
@media screen and (max-width: 750px){
    width: 500px;
};
@media screen and (max-width: 580px){
    width: 400px;
};
@media screen and (max-width: 450px){
    width: 300px;
};
@media screen and (max-width: 350px){
    width: 200px;
};
`;