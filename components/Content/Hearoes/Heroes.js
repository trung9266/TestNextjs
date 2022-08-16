import Image from "next/image";
import { Title, Text, Button,  TextItem, DivCenter } from "../../../styles/globalsStyle"
import {Heroes , HeroesItem, Buttons, ImagesBanner } from "./styleHeroes"
export default function HearoesHome() {
  return (
    <>
    <Heroes>
        <HeroesItem>
          <Title>Manage your daily task today with simple</Title>
          <Text color=" #F8F8F8" lineHeight="28px">Task-Andy is built for every member if your software team to plan, track, and release great software.</Text>
          <Buttons marginTop="5.5rem">
          <Button bgPrimary colorBlack>
                <DivCenter gap="8px">
                  <Image src="/assets/icon/apple.svg" width={20} height={26} alt="apple-icon"/>
                  <DivCenter >
                    <TextItem>AppStore</TextItem>
                  </DivCenter>
                </DivCenter>
              </Button>
           
              <Button bgPrimary colorBlack>
                <DivCenter gap="8px">
                  <Image src="/assets/icon/chplay.svg" width={20} height={26} alt="chplay-icon"/>
                  <TextItem>Google Play</TextItem>
                </DivCenter>
              </Button>
          </Buttons>
          <ImagesBanner>
            <Image src="/assets/banner/iphone-left.svg" width={265} height={588} alt="iphone"/>
            <Image src="/assets/banner/iphone-center.svg" width={327} height={662} alt="iphone"/>
            <Image src="/assets/banner/iphone-right.svg" width={265} height={588} alt="iphone"/>
          </ImagesBanner>
        </HeroesItem>
      </Heroes>
    </>
  );
}
