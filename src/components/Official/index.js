export default function Official({
  title,
  date,
  thumbnail
}) {
  return (
    <article className="flex gap-4 mb-4 pb-4 border-b border-gray-300 last:mb-0 last:pb-0 last:border-b-0">
      <div className="flex-1">
        
        <h3 className="text-sm">{title}</h3>
        <div className="mt-2 flex gap-2 items-self">
          <span className="bg-black w-6 h-6 text-white flex justify-center items-center font-bold rounded-sm">P</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      
      </div>
      <figure className="w-24"><img className="rounded-md" src={thumbnail} alt={`${title} 썸네일 이미지`} /></figure>
    </article>
  )
}