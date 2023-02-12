import Layout from "@/components/layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout home>
      <h1>
        Country Guesser
      </h1>
      <Link href="/play">
        Play
      </Link>
    </Layout>
  );
}
