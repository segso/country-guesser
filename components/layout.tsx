import {ReactNode} from "react";
import Header from "./header";

export default function Layout({
  children,
  home
}: {
  children: ReactNode,
  home?: boolean
}) {
  return (
    <>
      <Header home={home} />
      {children}
    </>
  );
}
