import { Header, HeaderItem, Wrapper, HeaderMobile, MenuMobile } from "./styleHeader";
import { Button } from "../../styles/globalsStyle"
import Image from "next/image";
import List from "../Common/List/List";
import React, { useState } from 'react';

export default function HeaderHome() {
  const [isShow, setIsShow] = useState(false);
  const menuShow = () =>{
    if (isShow === false) {
      setIsShow(true);
    } else if (isShow === true) {
      setIsShow(false);
    }
  }
  return (
    <Wrapper>
      <Header >
            <HeaderItem>
              <Image src="/assets/Logo.svg" width={100} height={100} alt="logo"/>
              <List/>
            </HeaderItem>
            <HeaderItem>
              <Button bgPrimary colorBlack>My Account</Button>
              <Button >Create Account</Button>
            </HeaderItem>
      </Header>
      <HeaderMobile >
            <HeaderItem>
              <Image src="/assets/Logo.svg" width={100} height={100} alt="logo"/>
            </HeaderItem>
            <HeaderItem>
              <MenuMobile onClick={menuShow}/>
              {isShow == true && <List/>}
            </HeaderItem>
      </HeaderMobile>
    </Wrapper>
  );
}
