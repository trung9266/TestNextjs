import Image from 'next/image'
import { DivCenter, TextItem } from '../../../styles/globalsStyle'
import { Media, MediaContainer } from "./styleMedia"
export default function MediaHome() {
  return (
    <>
        <Media>
            <MediaContainer>
                <TextItem center>Thousands of teams around the world are building software with Shortcut.</TextItem>
                <DivCenter gap="64px">
                    <Image src="/assets/logo-uihut/scale.svg" width={144} height={64} color="#000"  alt="logo-uihut"/>
                    <Image src="/assets/logo-uihut/fullstory.svg" width={144} height={64}color="#000"  alt="logo-uihut"/>
                    <Image src="/assets/logo-uihut/maven.svg" width={144} height={64} color="#000"  alt="logo-uihut"/>
                    <Image src="/assets/logo-uihut/makespace.svg" width={144} height={64} color="#000"  alt="logo-uihut"/>
                    <Image src="/assets/logo-uihut/glossier.svg" width={144} height={64} color="#000"  alt="logo-uihut"/>
                    <Image src="/assets/logo-uihut/cabify.svg" width={144} height={64} color="#000"  alt="logo-uihut"/>
                </DivCenter>
            </MediaContainer>
        </Media>
    </>
  )
}
