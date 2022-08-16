import styled from "styled-components";

export const Ul = styled.ul`
    display: ${(props)=>props.displayName};
    justify-content: ${(props)=>props.justifyContent};
    gap: ${(props)=>props.gap};
`
export const Li = styled.li`
    font-size: ${(props)=>props.fontSize ? props.fontSize : "16px"};
    list-style: none;
    padding: ${(props)=>props.padding};
    font-weight: 400;
    font-family: 'DM Sans';
    font-style: normal;
    cursor: pointer;
    :hover{
        background: rgba(255, 255, 255, 0.15);
    }
`
export const StyleLink = styled.a`
    text-decoration: none;
    font-size: ${(props)=>props.size};
    color: ${props => props.color};
`
