import styled from "styled-components";
export const Footer = styled.div`
    background-color: #FCFCFC;
    text-align: center;
    color: #000;
    @media (max-width: 768px) {
        display: none;
    }
`
export const FooterItem = styled.div`
    padding: ${(props) => props.padding};
    width:${(props) => props.width};
    margin: ${(props) => props.margin ? props.margin : "0"};
    display: ${(props) => props.display};
    justify-content: space-around;
    background-color: #FCFCFC;
    
`
export const Item = styled.div`
    justify-content: space-between;
    align-items: stretch;
    margin: ${(props) => props.margin};
    display: ${(props) => props.display};
    width:${(props) => props.width};
    margin-right: ${(props) => props.marginRight};
`
export const ItemContent = styled.div`
    display: ${(props) => props.display};
    margin-right: ${(props) => props.marginRight};
    text-align: left;
    :last-child{
        margin-right: 0;
    }
    margin-left: ${(props) => props.marginLeft};
    margin-top: ${(props) => props.marginTop};
    gap: ${(props) => props.gap};
    
`
export const Images = styled.div`
    
`
export const FooterContent = styled.div`
    display: flex;
    padding: 0 5.5rem;
`