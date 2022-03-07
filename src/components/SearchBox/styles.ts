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
   @media screen and (max-width: 800px){
    width: 600px;
};
@media screen and (max-width: 600px){
    width: 100%;
};
`;