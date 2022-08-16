import styled from 'styled-components'

export const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    z-index: 10;
`
export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`
export const HeaderMobile = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        z-index: 10;
        width: 100%;
    }
`
export const MenuMobile = styled.div`
    cursor: pointer;
    width: 2.5rem;
    height: 3px;
    background-color: #fff;
    position: relative;
    top: -5%;

  &::after {
    position: absolute;
    content: "";
    width: 2.5rem;
    height: 3px;
    transition-duration: 0.5s;
    background-color: #fff;
  }

  &::after {
    content: "";
    top: 10px;
  }
`
