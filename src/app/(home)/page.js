import Link from "next/link";

import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import { getPosts } from "@/services/post";

export default async function Home() {
  const API_URL = process.env.API_BASE_URL;  
  
  const notice = await getPosts(`${API_URL}posts/?_limit=5&category=공지사항`);
  const tech = await getPosts(`${API_URL}posts/?_limit=5&category=기술`);
  const question = await getPosts(`${API_URL}posts/?_limit=5&category=질문`);
  const daily = await getPosts(`${API_URL}posts/?_limit=5&category=일상`);
  const review = await getPosts(`${API_URL}posts/?_limit=5&category=리뷰`);
   
  return (
    <>
      <Header>
        <h1>
          <Link href="/">
            <img src="/images/next.svg" alt="A사" className="w-24"/>
            <span className="sr-only">A사 메인페이지로 이동하기</span>
          </Link>
        </h1>
        {/* <button type="button" className="relative w-6 h-4">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-black"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-black"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
        </button> */}
      </Header>
      <main className="px-4 py-8 space-y-12">
        <MainSection title="공지사항" data={notice}/>
        <MainSection title="기술" data={tech}/>
        <MainSection title="질문" data={question}/>
        <MainSection title="일상" data={daily}/>
        <MainSection title="리뷰" data={review}/>
      </main>
    </>
  );
}
