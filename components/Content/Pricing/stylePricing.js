import styled from "styled-components"

export const Pricing = styled.div`
    margin: 0 135px;
    padding: 2rem;
    @media screen and (max-width: 768px) {
        max-width: 768px;
        width: 100%;
        margin: 0 auto;
        padding: 0;  
    }
    @media screen and (min-width: 768px) {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 0;  
    }
    @media screen and (max-width: 320px){ 
        display: none;
    }
`
export const PriceHead = styled.div`
    padding: 50px 0;
    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 0;  
    }
`
export const PriceContent = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
    justify-content: space-between;
    flex-flow: row wrap;
    @media screen and (max-width: 900px){ 
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width:768px){
        flex-direction: column;
        width: 50%;
        margin: 50px auto;
    }
    @media screen and (max-width: 600px){
        flex-direction: column;
        width: 50%;
        margin: 50px auto;
    }
    @media screen and (max-width: 481px){ 
        width: 60%;
    }
`
export const PriceCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    border-radius: 20px;
    width: 30%;
    height: auto;
    @media screen and (max-width: 900px){ 
        width: 80%;
    }
    @media screen and (max-width: 768px){ 
        width: 100%;
    }
`
export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    background: #F8F8F8;
    border-radius: 10px;
    margin-top: 22px;
    padding: 10px 5px;
    max-width: 15rem;
    margin: 0 auto;
    @media screen and (max-width: 481px){
        justify-content: center;        
    }
`
export const Span =styled.span`
    font-size: 10px;
    color: #888888;
`
export const PriceCardContent = styled.div`
    margin: 25px 35px;
`
export const CardInfo = styled.div`
`
export const CardInfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 20px 0;
    text-align: left;
`