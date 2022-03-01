import styled from 'styled-components';

export const Container = styled.div`
margin-top: 2.5rem;
`;

export const Input = styled.input`
width: 800px;
height: 30px;
display: flex;
border-radius: 5px;
align-items: center;
justify-content: center;
background: ${({theme}) => theme.purple};
border: 1px solid ${({theme}) => theme.border};
::placeholder {
    justify-content: center;
    align-items: center;
        color: ${({theme }) => theme.white_details};
       padding: 0.5rem;
   }
`;