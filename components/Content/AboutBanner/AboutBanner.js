import Image from 'next/image'
import { AboutBanner, AboutBannerContainer, BannerItem, BannerCard, BannerContent, DivRelative, DivAbsolute, LinePortrait } from "./styleAboutBanner"
import { DivCenter, TextItem, TextTitle } from '../../../styles/globalsStyle'
export default function AboutBannerHome() {
  return (
    <>
        <AboutBanner>
            <AboutBannerContainer>
                <BannerContent column>
                    <BannerCard>
                        <BannerItem>
                            <DivRelative>
                                <Image src="/assets/banner/background-banner-1.jpg" alt="Logo" width={400} height={200} layout="responsive"/>
                                <DivAbsolute>
                                    <Image src="/assets/banner/iPhone-13-Pro.svg" alt="Logo" width={400} height={300} layout="responsive"/>
                                </DivAbsolute>
                            </DivRelative>
                        </BannerItem>
                    </BannerCard>
                    <BannerCard>
                        <BannerItem>
                            <DivCenter column aLignItem="flex-start">
                                <TextTitle>Customize your tasks for any project.</TextTitle>
                                <TextItem margin="0">Use over apps to customize your tasks for any of your work needs. Save time with task.</TextItem>
                                <LinePortrait></LinePortrait>
                            </DivCenter>
                        </BannerItem>
                    </BannerCard>
                </BannerContent>
                <BannerContent>
                    <BannerCard>
                        <BannerItem>
                            <TextTitle >Customize your tasks for any project.</TextTitle>
                            <TextItem>Use over apps to customize your tasks for any of your work needs. Save time with task.</TextItem>
                            <LinePortrait></LinePortrait>
                        </BannerItem>
                    </BannerCard>
                    <BannerCard>
                        <BannerItem>
                            <DivRelative >
                                <Image src="/assets/banner/background-banner-2.jpg" alt="Logo" width={400} height={200} layout="responsive"/>
                                <DivAbsolute>
                                    <Image src="/assets/banner/iPhone-13-Pro2.svg" alt="Logo" width={400} height={300} layout="responsive"/>
                                </DivAbsolute>
                            </DivRelative>
                        </BannerItem>
                    </BannerCard>
                </BannerContent>
            </AboutBannerContainer>
        </AboutBanner>
    </>
  )
}
