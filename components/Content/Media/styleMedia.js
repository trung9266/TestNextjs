import styled from "styled-components";
export const Media = styled.div`
    margin: 10rem 3.125rem 8.75rem 3.125rem;
    @media screen and (max-width:768px){
        margin: 5rem 50px 50px 50px;
    }
    @media screen and (min-width:768px){
        margin: 8rem 50px 50px 50px;
    }
    @media screen and (min-width: 1024px){
        margin: 13rem 50px 50px 50px;
    }
    @media screen and (min-width: 1440px){
        margin: 1rem 50px 5rem 50px;
    }
`
export const MediaContainer = styled.div`
    text-align: center;
`
