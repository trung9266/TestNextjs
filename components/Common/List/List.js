import Image from "next/image";
import Link from "next/link";
import { Ul, Li, StyleLink } from "./styleList";
export default function List() {
  return (
    <>
    <Ul displayName="flex" justifyContent="space-beetween" gap="17px">
      <Li padding="8px 10px">
        <Link href="#">
          <StyleLink color="#fff">Home</StyleLink>
        </Link>
      </Li>
      <Li padding="8px 10px">
        <Link href="#">
          <StyleLink color="#fff">About</StyleLink>
        </Link>
      </Li>
      <Li padding="8px 10px">
        <Link href="#">
          <StyleLink color="#fff">Program</StyleLink>
        </Link>
      </Li>
      <Li padding="8px 10px">
        <Link href="/PricingServer" prefetch={false}>
          <StyleLink color="#fff">Tutorial</StyleLink>
        </Link>
      </Li>
    </Ul>
    </>
  );
}

