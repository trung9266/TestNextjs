import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Text, Button, ButtonCustom, TextItem, TextTitle, DivCenter } from "../../styles/globalsStyle"
import { Pricing,  PriceCard, ButtonGroup, Span, PriceContent, PriceCardContent, CardInfo, CardInfoItem } from "../../components/Content/Pricing/stylePricing";
import axios from 'axios';

export default function PricingHome({pricingData}) {
  const [PricingIsActive, setPricingIsActive] = useState(true);
   
   
  return (
    <>
    <Pricing>
        <DivCenter>
            <TextTitle sizeLarge>Pricing</TextTitle>
            <Link href="/PricingInitial/test">Go to TestPage</Link>
        </DivCenter>
        <ButtonGroup>
            <Button onClick={() => setPricingIsActive(true)} bgPrimary="#fff" padding="0 8px" display="flex">
              <Text>Bill yearly</Text>
              <Span>-40%</Span>
            </Button>
            <Button onClick={() => setPricingIsActive(false)} padding="0 8px">Bill monthly</Button>
        </ButtonGroup>
        <PriceContent>
          {pricingData.data?.map((value, key) => (
             PricingIsActive === true ? value.type ==="yearly" &&
             <PriceCard key={key}>
              <PriceCardContent>
                <TextTitle>{value.name}</TextTitle>
                <TextItem>{value.title}</TextItem>
                <CardInfo>
                  {value.description.map((item,keyD) => {
                    return(
                    <CardInfoItem key={keyD}>
                      <Image src="/assets/icon/check-blue.svg" width={8} height={5} layout="intrinsic" color="#000" alt="check"/>
                      <TextItem margin>{item}</TextItem>
                    </CardInfoItem>
                    )
                  })}
                </CardInfo>
                <TextTitle sizeLarge>${value.price}</TextTitle>
                <TextItem>*{value.note}</TextItem>
                <ButtonCustom margin="26px" bgCustom="#46AAF2">Choose Plan</ButtonCustom>
              </PriceCardContent>
            </PriceCard> 
            : value.type ==="monthly" && 
            <PriceCard key={key}>
              <PriceCardContent>
                <TextTitle>{value.name}</TextTitle>
                <TextItem>{value.title}</TextItem>
                <CardInfo>
                  {value.description.map((item,keyD) => {
                    return(
                    <CardInfoItem key={keyD}>
                      <Image src="/assets/icon/check-blue.svg" width={8} height={5} layout="intrinsic" color="#000" alt="check"/>
                      <TextItem margin>{item}</TextItem>
                    </CardInfoItem>
                    )
                  })}
                </CardInfo>
                <TextTitle sizeLarge>${value.price}</TextTitle>
                <TextItem>*{value.note}</TextItem>
                <ButtonCustom margin="26px" bgCustom="#46AAF2">Choose Plan</ButtonCustom>
              </PriceCardContent>
            </PriceCard>))}
        </PriceContent>
      </Pricing>
    </>
  );

}
PricingHome.getInitialProps = async (ctx) => {
    const dataPricingFetch = await fetch('https://apitest.travelner.com/frontend/test/product')
    const pricingData = await dataPricingFetch.json();
    
    return { pricingData }
}