import Head from "next/head";
import Image from "next/image";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import Link from "next/link";
import { HiLogin } from "react-icons/hi";
import MainContent from "./MainContent";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function LandingPage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <title>Xzayvian</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Header isAuthenticated={false} />
        <MainContent>
          <h1 className="text-4xl lg:text-6xl flex flex-row items-center mt-10 lg:mt-0">
            XZAYVIAN
          </h1>
          <h1 className="text-4xl lg:text-6xl font-light">GPT</h1>
          <p className="text-xl lg:text-2xl">
            Based on OpenAI GPT-3.5-Turbo LLM
          </p>
          <div className="flex flex-row space-x-4 items-center">
            <Link
              href="/api/auth/login"
              className="flex flex-row space-x-2 items-center text-xl lg:text-2xl mt-10 pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-slate-900"
            >
              <span className="text-neutral-200">
                <HiLogin />
              </span>
              <p>jump in</p>
            </Link>
            <Link
              href="/about"
              className="flex flex-row space-x-2 items-center text-xl lg:text-2xl mt-10 pt-1 pb-1 pl-3 pr-3 w-fit lowercase rounded-full bg-neutral-900 bg-opacity-50 text-neutral-200 hover:bg-slate-900"
            >
              <span className="text-neutral-200">
                <AiOutlineInfoCircle />
              </span>
              <p>learn more</p>
            </Link>
          </div>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}
