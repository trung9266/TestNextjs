import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper';
import { TextItem, DivCenter, Title } from "../../../styles/globalsStyle";
import { CardContent, CardInfo, CardTitle, Avatar, Div, TextName, Info, TextInfo } from "./styleInfo";
import Image from "next/image"
export default function InfoHome() {
  return (
    <>
    <Info>
        <DivCenter noWrap margin=" 0 3rem">
            <Title size="22px" marginNoCenter="2rem 0" jSpaceBet>Trusted by millions of customers.</Title>
            <Div>
                <Image src="/assets/icon/trustpilot.svg" width={100} height={50} alt="trustpilot"/>
                <TextItem margin>Inbound Marketing Team.</TextItem>
            </Div>
        </DivCenter>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
            clickable: true,
            }}
            navigation={true} modules={[Navigation]} 
            className="mySwiper"
        >
            <SwiperSlide>
                <CardContent>
                    <CardTitle>
                        <TextInfo size="22px" margin padding="20px">Andy has become such an integral part of our work! By setting up weekly Sprints to discuss and organize our work, we can easily collaborate with other departments without spending hours at a time in meetings.</TextInfo>
                    </CardTitle>
                    <CardInfo>
                        <DivCenter gap="2px">
                            <Avatar>
                                <Image src="/assets/info-sagor.jpg" width={50} height={50} alt="info"/>
                            </Avatar>
                            <Div>
                                <TextName>Sagor Ahmad</TextName>
                                <TextItem margin>Inbound Marketing Team.</TextItem>
                            </Div>
                        </DivCenter>
                    </CardInfo>
                </CardContent>
            </SwiperSlide>
            <SwiperSlide>
                <CardContent>
                    <CardTitle>
                        <TextInfo size="22px" margin padding="20px">The Andy project management software allows me to have greater connection with different departments. For example, I can interact with engineers directly and establish working relationships—and that collaboration has been extremely valuable.</TextInfo>
                    </CardTitle>
                    <CardInfo>
                        <DivCenter gap="2px">
                            <Avatar>
                                <Image src="/assets/info-sagor.jpg" width={50} height={50} alt="info"/>
                            </Avatar>
                            <Div >
                                <TextName>Kyler Rose</TextName>
                                <TextItem margin>Marketing Services Manager</TextItem>
                            </Div>
                        </DivCenter>
                    </CardInfo>
                </CardContent>
            </SwiperSlide>
            <SwiperSlide>
                <CardContent>
                    <CardTitle>
                        <TextInfo size="22px" margin padding="20px">In government we have no shortage of challenges, but there are a lot of things we can control. There are processes that we can improve upon and refine. Tools like Andy are what allow us to do better. We have a lot of challenges here at the White House. But there are things we can do to get stuff done. Tools like Andy help us work together better</TextInfo>
                    </CardTitle>
                    <CardInfo>
                        <DivCenter gap="2px">
                            <Avatar>
                                <Image src="/assets/info-sagor.jpg" width={50} height={50} alt="info"/>
                            </Avatar>
                            <Div>
                                <TextName>Mayor Jorge Elorza</TextName>
                                <TextItem margin>City of Providence</TextItem>
                            </Div>
                        </DivCenter>
                        
                    </CardInfo>
                </CardContent>
            </SwiperSlide>
            <SwiperSlide>
                <CardContent>
                    <CardTitle>
                        <TextInfo size="22px" margin padding="20px">New employees can look at the Creative Requests board, and immediately understand what the entire marketing team is working on without having to ask. The Creative Requests board keeps new employees in the loop about all of the companys marketing campaigns. The Creative Requests board </TextInfo>
                    </CardTitle>
                    <CardInfo>
                        <DivCenter gap="2px">
                            <Avatar>
                                <Image src="/assets/info-sagor.jpg" width={50} height={50} alt="info"/>
                            </Avatar>
                            <Div>
                                <TextName>Serge Vatine</TextName>
                                <TextItem margin>CEO, Bold Avocats</TextItem>
                            </Div>
                        </DivCenter>
                    </CardInfo>
                </CardContent>
            </SwiperSlide>
        </Swiper>
      </Info>
    </>
  )
}
