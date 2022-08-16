import { Footer, FooterItem, Item, ItemContent, Images, FooterContent } from "./styleFooter";
import { Button, Text } from "../../styles/globalsStyle"
import Image from "next/image";
import List from "../Common/List/List";

export default function FooterHome() {
  return (
    <>
    <Footer>
        <FooterItem >
          <FooterContent display="flex">
            <Item width="35%">
                <ItemContent marginTop="27px" >
                  <Images>
                    <Image src="/assets/Logo-dark.svg" width={136} height={34} layout="intrinsic" alt="logo"/>
                  </Images>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.5" fontWeight="400" padding="27px 0">This membership will help you plan and execute a variety of projects.</Text>
                </ItemContent>
            </Item>
            <Item display="flex" width="65%">
                <ItemContent>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.5" fontWeight="400" firstChild>Home</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Product</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Pricing</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Business</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Enterprise</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Customer Success</Text>
                </ItemContent>
                <ItemContent>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.5" fontWeight="400" firstChild>About Us</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Company</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Leadership</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Careers</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Diversity</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Sitemap</Text>
                </ItemContent>
                <ItemContent>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.5" fontWeight="400" firstChild>Resources</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Andy Guide</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Forum</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Support</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>App Directory</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Events</Text>
                </ItemContent>
                <ItemContent>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.5" fontWeight="400" firstChild>Tutorial</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>10 Leadership Styles</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Executive Summary Tips</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>Prevent Team Burnout</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>What are OKRs?</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400" animated>See All Guides</Text>
                </ItemContent>
            </Item>
          </FooterContent>
        </FooterItem>
        <FooterItem >
            <FooterItem display="flex">
            <ItemContent>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400">©2022 Made in uihut.com</Text>
                </ItemContent>
                <ItemContent>
                  <Image src="/assets/icon/facebook.svg" width={24} height={24} layout="intrinsic" color="#000" alt="facebook"/>
                  <Image src="/assets/icon/twitter.svg" width={24} height={24} layout="intrinsic" color="#666" alt="twitter"/>
                  <Image src="/assets/icon/linkedin.svg" width={24} height={24} layout="intrinsic" color="#666" alt="linkedin"/>
                </ItemContent>
                <ItemContent display="flex" gap="40px">
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400">Privacy Policy</Text>
                  <Text textAlign="left" fontSize="18px" lineHeight="1.2" fontWeight="400">Terms and conditions</Text>
                </ItemContent>
            </FooterItem>
        </FooterItem>
    </Footer>
    </>
  );
}
