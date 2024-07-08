import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-6xl text-center text-orange-400">Hello World!</h1>
      <Link href={"/aboutus"} className="homeBtn">
        About Us
      </Link>
      <Link href={"/privacypolicy"} className="homeBtn">
        Privacy Policy Page
      </Link>
      <Link href={"/terms"} className="homeBtn">
        Terms Page
      </Link>
      <Link href={"/returnpolicy"} className="homeBtn">
        Return Page
      </Link>
    </div>
  );
}
