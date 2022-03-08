import styled from "styled-components";


export const Container = styled.div`
background-color: ${({ theme }) => theme.black} ;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

@media screen and (max-width: 950px){
  height: 100%;
  margin-top: 1.5rem;
display: flex ;
flex-direction: column;
align-items: center;
justify-content: center;
};
`;

export const Icon = styled.div`
width: 100% ;
 color: ${({ theme }) => theme.white_details};
 font-size: 1.2rem;
 padding-left: 8rem ;
 text-align: left ;
 cursor: pointer ;
 @media screen and (max-width: 1900px){
  margin-bottom: 5rem ;
};
@media screen and (max-width: 1700px){
  margin-bottom: 4rem ;
  padding-left: 6rem ;
};
@media screen and (max-width: 1450px){
  margin-bottom: 3rem ;
  padding-left: 4rem ;
};
@media screen and (max-width: 1250px){
  text-align:  justify;
line-height: 1.5rem ;
font-size: 1rem;
padding-left: 2rem ;
};
@media screen and (max-width: 1000px){
  padding-left: 4rem ;
};
@media screen and (max-width: 850px){
  padding-left: 1rem ;
};
@media screen and (max-width: 780px){
  padding-left: 1rem ;
};
@media screen and (max-width: 600px){
padding-top: 1rem ;
};
`;

export const Info = styled.div`
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: space-between ;
@media screen and (max-width: 700px){

  display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
};
`;

export const Title = styled.h1`
font-size: 2.5rem;
 text-align: center;
 color: ${({ theme }) => theme.white_details};
 @media screen and (max-width: 1900px){
  text-align:  justify;
line-height: 7rem ;
font-size: 4.5rem;
};
@media screen and (max-width: 1700px){
  text-align:  justify;
line-height: 6rem ;
font-size: 4rem;
};
@media screen and (max-width: 1450px){
  text-align:  justify;
line-height: 5rem ;
font-size: 4rem;
};
@media screen and (max-width: 1080px){
  text-align:  justify;
line-height: 4.5rem ;
font-size: 3rem;
};
@media screen and (max-width: 1000px){
line-height: 4rem ;
text-align:  justify;
font-size: 2.5rem;
};
@media screen and (max-width: 850px){
line-height: 3rem ;
text-align:  justify;
font-size: 2.5rem;
};
@media screen and (max-width: 780px){
line-height: 3rem ;
text-align:  justify;
font-size: 2rem;
};
@media screen and (max-width: 715px){
line-height: 3rem ;
text-align:  justify;
font-size: 1.8rem;
};
@media screen and (max-width: 400px){
line-height: 2rem ;
text-align:  justify;
font-size: 2.5rem;
};
@media screen and (max-width: 308px){
line-height: 1rem ;
text-align:  justify;
font-size: 1.5rem;
};
 `;

export const NameContainer = styled.div`
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
`;

export const DateInfo = styled.div`
width: 100% ;
margin-top: 0.5rem ;
display:  flex;
align-items: center ;
justify-content: space-between ;
`;


export const Details = styled.div`
padding: 30px;

`;


export const Overview = styled.p`
text-align:  justify;
line-height: 1.5rem ;
font-size: 1.2rem;
color: ${({ theme }) => theme.white_details};
@media screen and (max-width: 1900px){
  text-align:  justify;
line-height: 3.5rem ;
font-size: 2rem;
};
@media screen and (max-width: 1700px){
  text-align:  justify;
line-height: 3rem ;
font-size: 2rem;
};
@media screen and (max-width: 1450px){
  text-align:  justify;
line-height: 2rem ;
font-size: 1.6rem;
};
@media screen and (max-width: 1200px){
  text-align:  justify;
line-height: 2rem ;
font-size: 1.4rem;
};
@media screen and (max-width: 1100px){
  text-align:  justify;
line-height: 2rem ;
font-size: 1.3rem;
};
@media screen and (max-width: 1000px){
  text-align:  justify;
line-height: 2rem ;
font-size: 1.2rem;
};
@media screen and (max-width: 850px){
  text-align:  justify;
line-height: 1.7rem ;
font-size: 1.2rem;
};
@media screen and (max-width: 780px){
  text-align:  justify;
line-height: 1.7rem ;
font-size: 1.1rem;
};
@media screen and (max-width: 700px){
  text-align:  justify;
line-height: 1.5rem ;
font-size: 1.1rem;
};
`;

export const Poster = styled.img`
height: 100vh;
width: 100% ;
border-radius: 100% 30% 100% 30% ;

@media screen and (max-width: 1230px){
  width: 50% ;
};

@media screen and (max-width: 950px){
  border-radius: 0%;
  width: 100% ;
};
@media screen and (max-width: 700px){
  border: none;
    margin-left: 0px;
    border-radius: 0%;
};
`;

export const Popularity = styled.span`
 color: ${({ theme }) => theme.rate};
 font-size: 1.2rem;
 text-align: left ;
 @media screen and (max-width: 1900px){
  line-height: 2rem ;
text-align:  justify;
font-size: 1.7rem;
};
@media screen and (max-width: 1700px){
  text-align:  justify;
  line-height: 1.8rem ;
font-size: 1.7rem;

};
@media screen and (max-width: 1450px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.6rem;
};
@media screen and (max-width: 1250px){
margin-right: 0.5rem ;
};
@media screen and (max-width: 850px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.4rem;
};
@media screen and (max-width: 780px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.3rem;
};
@media screen and (max-width: 400px){
  text-align:  justify;
  line-height: 1.5rem ;
font-size: 1.1rem;
};
`;
export const ReleaseDate = styled.span`
font-size: 1.2rem ;
 color: ${({ theme }) => theme.white_details};
 text-align: left ;
 @media screen and (max-width: 1900px){
line-height: 2rem ;
text-align:  justify;
font-size: 1.7rem;
};
@media screen and (max-width: 1700px){
  text-align:  justify;
  line-height: 1.8rem ;
font-size: 1.7rem;
};
@media screen and (max-width: 1450px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.6rem;
};
@media screen and (max-width: 850px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.4rem;
};
@media screen and (max-width: 780px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.3rem;
};
@media screen and (max-width: 400px){
  text-align:  justify;
  line-height: 1.5rem ;
font-size: 1.1rem;
};
`;
export const Language = styled.span`
font-size: 1.2rem ;
 text-align: center;
 padding-left: 15px ;
 @media screen and (max-width: 1900px){
  line-height: 2rem ;
text-align:  justify;
font-size: 1.7rem;
};
@media screen and (max-width: 1700px){
  line-height: 1.8rem ;
font-size: 1.7rem;
};
@media screen and (max-width: 1450px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.6rem;
};
@media screen and (max-width: 850px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.4rem;
};
@media screen and (max-width: 780px){
  text-align:  justify;
  line-height: 1.7rem ;
font-size: 1.3rem;
};
@media screen and (max-width: 400px){
  text-align:  justify;
  line-height: 1.5rem ;
font-size: 1.1rem;
};
`;

export const Trailer = styled.button`
width: 100%;
height: 50px ;
margin-top: 15px ;
padding: 30px;
display: flex ;
border-radius: 12px ;
align-items: center ;
justify-content: space-evenly;
border: none ;
background-color: ${({ theme }) => theme.black} ;
border: 1px solid ${({ theme }) => theme.border};
@media screen and (max-width: 1900px){
  margin-top: 2rem ;
  width: 50%;
height: 80px ;
};
@media screen and (max-width: 1000px){
  width: 40%;
padding: 15px;
  margin-top: 1rem ;
};

@media screen and (max-width: 440px){
  width: 50%;
padding: 15px;
};
@media screen and (max-width: 362px){
  width: 70%;
padding: 15px;
};
`;

export const ButtonText = styled.span`
font-size: 1.2rem ;
 color: ${({ theme }) => theme.white_details};
 @media screen and (max-width: 1900px){
line-height: 2rem ;
font-size: 1.5rem;
};
@media screen and (max-width: 1450px){
  text-align:  justify;
  line-height: 1.5rem ;
font-size: 1.3rem;
};
@media screen and (max-width: 1200px){
  text-align:  justify;
  line-height: 1.4rem ;
font-size: 1.2rem;
};
@media screen and (max-width: 780px){
  text-align:  justify;
  line-height: 1.3rem ;
font-size: 1.1rem;
};
`;