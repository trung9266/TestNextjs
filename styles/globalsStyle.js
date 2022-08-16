import styled, { css } from "styled-components";


// const Wrapper = {
//     Container: "w-full px-[15px] mx-auto max-w-[1170px]",
//     ContainerFluid: "w-full px-[15px] mx-auto max-",
//     Section: "py-[60px]",

// }


// export default Wrapper

export const Title = styled.h2`
        display: flex;
        text-align: ${(props)=> props.textAlign ? "left" : "center"};
        justify-content: ${(props)=> props.jSpaceBet ? "space-between" : "center"};
        align-items: center;
        width: 100%;
        font-family: 'Clash Grotesk';
        font-weight: 600;
        font-size: ${(props)=> props.size ? "48px" : "66px"};
        letter-spacing: 0.02em;
        color: ${(props)=> props.color ? "#000" : "#FFFFFF"};
        margin: ${(props)=> props.marginNoCenter ? props.marginNoCenter : "0 auto"};
        @media (max-width: 768px) {
            font-weight: 600;
            font-size: 40px;
            line-height: 46px;
        }
`
export const Text = styled.p`
    font-size: ${(props)=>props.fontSize ? "18px" : "16px"};
    margin: ${(props)=>props.margin};
    color: ${(props)=>props.color ? props.color : "#000"};
    width: ${(props)=>props.width};
    text-align: ${(props)=>props.textAlign ? props.textAlign : "center"};
    font-family: 'DM Sans';
    font-weight: ${(props)=>props.fontWeight ? props.fontWeight : "600"};
    line-height: ${(props)=>props.lineHeight};
    letter-spacing: 0.02em;
    ${props => props.firstChild ? props.firstChild && css`
            &:first-child{
                font-weight: 500;
                font-size: 18px;
                line-height: 18px;
                margin-bottom: 26px;
                margin-top: 27px;
            }
        `
        : css`
        &:first-child{

        }
    `}
    @media screen and (max-width: 768){
    }
    
    ${props => props.animated ? props.animated && css`
        &:hover {
            text-decoration: underline 2px;
            font-weight: 500;
        }
    ` : css`
        &:hover {
        }
    `
    }`
export const TextItem = styled(Text)`
    justify-content: space-between;
    align-items: center;
    margin: ${(props) => props.margin ? "0" : "0 auto"};
    color: #666;
    font-size: ${(props) => props.size ? "16px" : "14px"};
    line-height: 1;
    font-weight: 400;
    text-align: ${(props) => props.center ? "center" : "left"};
    padding: ${(props) => props.padding};
`;
export const TextTitle = styled(Text)`
    text-align: ${(props) => props.center ? "center" : "left"}; 
    font-size: ${(props) => props.sizeLarge ? "48px" : "26px"}; 
    line-height: 1.2; 
    font-weight: 500; 
    color: #000;
    margin: 26px 0 0 0;
`;
export const Button = styled.div`
    background-color: ${(props)=>props.bgPrimary ? "#FFF" : '#F7B731'};
    padding: ${(props)=>props.padding ? props.padding : "0 20px"};
    margin: ${(props)=>props.margin};
    color: ${(props) => props.colorBlack ? props.colorBlack : "#fff"};
    font-size: ${(props)=>props.fontSize ? props.fontSize: "16px"};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    font-family: 'DM Sans';
    font-style: normal;
    cursor: pointer;
    height: ${(props)=>props.height ? "": "44px"};
    @media screen and (max-width: 321px) {
        padding: 0;
        gap: 0;
    }
`
export const ButtonCustom = styled(Button)`
    background-color: ${(props)=>props.bgCustom};
    margin: ${(props)=>props.margin};
`
export const DivCenter = styled.div`
    display: flex;
    justify-content: ${(props)=>props.jSpace ? "space-between" : "center"};
    align-items: ${(props)=> props.aLignItem ? props.aLignItem : "center"};
    gap: ${(props)=>props.gap};
    flex-direction: ${(props)=>props.column ? "column" : "row"};
    flex-wrap: ${(props)=>props.noWrap ? "no-wrap" : "wrap"};
    margin: ${(props)=>props.margin};
`
