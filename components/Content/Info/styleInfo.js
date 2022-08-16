import styled from "styled-components";
const img = "/background/background-info.png"
export const Info = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    background-color: white;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    width: calc(calc(100% / var(--columns)) - var(--spacing));
    margin-left: var(--spacing);
    margin-bottom: var(--spacing);
    min-height: -webkit-fill-available;
`
export const CardTitle = styled.div`
    height: 300px;
    flex: 1;
`
export const CardInfo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
export const Avatar = styled.div`
    flex: 1;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props)=> props.alignItems ? props.alignItems : 'center'};
    gap: 2px;
`
export const TextName = styled.div`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 24px;
    color: #000000;
    text-align: left;
    @media screen and (max-width: 768px) {
     font-size: 18px;
    }
`
export const TextInfo = styled.p`
    object-fit: cover;
    text-align: left;
    padding: 0 20px;
    flex-shrink: 0;
    font-weight: 500;
    margin-bottom: 25px;
    word-break: break-all;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #666666;
`
