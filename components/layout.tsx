import {ReactNode} from "react";
import Header from "./header";

export default function Layout({
  children,
  home,
  score
}: {
  children: ReactNode,
  home?: boolean,
  score?: number
}) {
  return (
    <>
      <Header home={home} score={score} />
      {children}
    </>
  );
}
