import Link from "next/link";
import SectionTitle from "@/components/SectionTitle"
import MetaPost from "@/components/MetaPost";

export default function mainSection(props) {
  const data = props.data;

  return (
    <section className="space-y-4">
      <SectionTitle title={props.title}/>
      {data.length > 0 && (
        <div className="space-y-8">
          {data.map(item => (
            <article 
              key={item.id}
              className="pb-8 border-b border-gray-300 last:border-none last:pb-0"
            >
              <Link 
                href={`/view/${item.id}`}
                className="space-y-2"
              >
                <div className="space-y-1">
                  <h3 className="text-lg tracking-tight font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
                  <p className="tracking-tight text-gray-700 line-clamp-2">{item.content}</p>
                </div>
                <figure>
                  <img 
                    src={item.src}
                    className="rounded-lg"
                    alt={`${item.title} 상세 페이지로 이동하기`}
                  />
                </figure>
                <MetaPost author={item.author} date={item.date} views={item.views}/>
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}