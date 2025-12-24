import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import MetaPost from "@/components/MetaPost";
import { getPosts } from "@/services/post";


export default async function View(children) {
  const API_URL = process.env.API_BASE_URL;

  const params = await children.params;
  const id = await params.id;  
  const data = await getPosts(`${API_URL}posts/?id=${id}`);
  return (
    <>
      <Header>        
        <BackButton/>
      </Header>
      <div>
        <article className="px-4 py-8">
          <section className="border-t-2 py-4 px-2 border-b border-b-gray-300 space-y-2">
            <h1 className="tracking-tight text- font-semibold">{data[0].title}</h1>
            <MetaPost author={data[0].author} date={data[0].date} views={data[0].views}/>
          </section>
          <section className="py-4 space-y-4">
            <figure><img src={data[0].src} alt={`${data[0].title} 이미지`}/></figure>
            <div>
              {data[0].content}
            </div>
          </section>
        </article>
      </div>
    </>
  )
}