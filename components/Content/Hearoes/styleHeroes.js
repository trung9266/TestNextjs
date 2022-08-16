import styled from "styled-components"

const img = "/background/Rectangle868.png"
export const Heroes = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
    @media screen and (max-width: 768px) {
        background-image: url('/background/background-mobile.png');
        max-height: 100%;
    }
    @media screen and (min-width: 1440px) {
        height: 1145px;
        max-height: 100%;
    }
`
export const HeroesItem = styled.div`
    height: auto;
    top: 0;
    padding-top: 100px;
    /* transform: translateY(100%);
    @media screen and (max-width: 1440px) {
        transform: translateY(90%);
    }
    @media screen and (max-width: 1200px) {
        transform: translateY(70%);
    }
    @media screen and (max-width: 1024px) {
        transform: translateY(60%);
    }
    @media screen and (max-width: 768px) {
        transform: translateY(60%);
    }
    @media screen and (max-width: 622px) {
        transform: translateY(50%);
    }
    @media screen and (max-width: 481px) {
        transform: translateY(50%);
    }
    @media screen and (max-width: 320px) {
        transform: translateY(30%);
    } */
`
export const Buttons = styled.button`
    display: flex;
    align-items: center;
    gap: 26px;
    background: none;
    border: none;
    text-align: center;
    font-family: 'DM Sans';
    margin-top: ${(props)=>props.marginTop};
    margin: 0 auto;
`
export const ImagesBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        margin: 10% auto;
        width: 80%;
    }
    @media screen and (min-width: 1024px) {
        margin: 50px auto;   
        width: 80%;
    }
    
`
