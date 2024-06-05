import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="font-bold text-lg">Server Actions Case</h1>
      
      <Link href={"/case-1"} className="link block">
        - Case 1
      </Link>
      <Link href={"/case-2"} className="link block">
        - Case 2 useTransition
      </Link>
    </main>
  );
}
