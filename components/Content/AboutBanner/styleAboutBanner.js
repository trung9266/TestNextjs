import styled from "styled-components";

export const AboutBanner = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`
export const AboutBannerContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 130px;
    background: #F8F8F8;
    padding: 10rem 0px 2rem 0;
    @media screen and (max-width: 1440px){
        margin-top: 8rem;
        padding: 5rem 0px 2rem 0; 
    }
    @media screen and (max-width: 1024px){
        margin-top: 8rem;
        padding: 2rem 0px 2rem 0; 
    }
    @media screen and (max-width: 768px){
        margin-top: 8rem;
        padding: 2rem 0px 2rem 0; 
    }
`

export const BannerContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 130px; 
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        flex-direction: ${(props)=> props.column ? 'column-reverse' : 'column'};
        gap: 130px;   
        margin-top: 0; 
    }
`

export const BannerCard = styled.div`
    width: 100%;
    height: auto;
    margin: 20px;
    @media screen and (max-width: 900px) { 
        width: 92%;
    }
    @media screen and (max-width: 600px) { 
        width: 90%;
    }
    @media screen and (max-width: 320px){ 
        width: 80%;
    }
`
export const BannerItem = styled.div`
    @media screen and (min-width: 1024px) {
        padding: 30px;
    }
`
export const DivRelative = styled.div`
    position: relative;
`
export const DivAbsolute = styled.div`
    position: absolute;
    width: 100%;
    top: -50%;
    height: 100px;
`
export const LinePortrait = styled.div`
    border-left: 15rem solid #888;
    height:1px;
    text-align: center;
    margin: 10px 0;
    align-items: center;
    @media screen and (max-width: 600px){
        border-left: 15rem solid #888;
    }
    @media screen and (max-width: 481px){
        border-left: 12rem solid #888;
    }
    @media screen and (max-width: 320px){
        border-left: 8rem solid #888;
    }
`

