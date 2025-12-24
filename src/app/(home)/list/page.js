import Link from "next/link";
import BackButton from "@/components/BackButton";
import MetaPost from "@/components/MetaPost";
import Header from "@/components/Header";
import { getPosts } from "@/services/post";


export default async function List({ searchParams }) {
  const { category } = await searchParams;
  const API_URL = process.env.API_BASE_URL;  

  const data = await getPosts(`${API_URL}posts/?_limit=5&category=${category}`);
  
  return (
    <>
      <Header>        
        <BackButton/>
        <h1 className="absolute top-1/2 left-1/2 -translate-1/2 text-xl font-bold tracking-tight">
          {category} 블로그
        </h1>
      </Header>
      <main className="px-4 py-8">
        {data.length > 0
          ? (
              <div className="space-y-4">
                {data.map(item => (
                  <article key={item.id}>
                    <Link 
                      href={`/view/${item.id}`} 
                      className="block space-y-2 p-2 tracking-tight font-medium text-gray-700 whitespace-nowrap overflow-ellipsis overflow-hidden bg-gray-100 rounded-md shadow"
                    >
                      <h3>{item.title}</h3>
                      <MetaPost author={item.author} date={item.date} views={item.views}/>
                    </Link>
                  </article>
                ))}
              </div>
            )            
          : (
              <div>
                <p className="">게시글이 존재하지 않습니다.</p>
              </div>
            )
        }
      </main>      
    </>
  )
}