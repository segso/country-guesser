import {ReactNode} from "react";
import Header from "./header";

export default function Layout({
  children,
  home,
  text
}: {
  children: ReactNode,
  home?: boolean,
  text?: string
}) {
  return (
    <>
      <Header home={home} text={text} />
      {children}
    </>
  );
}
