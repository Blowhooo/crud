export default function PostCard({
  profileImage,
  user,
  title,
  content,
  date,
  hash,
  attachmentImage,
}) {

  function dateFormat(dateStr) {
    const [year, month, day] = dateStr.split(".").map(s => s.trim().padStart(2, "0"));
    return `${year}-${month}-${day}`;
  }

  return (
    <article 
      className="flex mb-8 pb-8 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0"
    >
      <div className="flex justify-between items-self gap-4">
        <figure className="w-15 h-15">
          <img src={profileImage} alt={`${user}의 프로필 이미지`} className="w-full h-full object-cover rounded-full"/>
        </figure>
        <div className="flex-1 pr-8">
          <h3 className="font-medium">{user}</h3>
          <time 
            dateTime={dateFormat(date)} 
            className="text-sm text-gray-400"
          >
            {date}
          </time>
          <h4 className="mt-2 text-lg font-medium">{title}</h4>
          <p className="mt-1">{content}</p>
          {
            hash && hash.length > 0 && (
              <ul className="mt-2 flex gap-2">
                {hash.map((tag, index) => (
                  <li key={index} className="py-1 px-2 text-sm bg-gray-200 rounded-2xl text-gray-700">#{tag}</li>
                ))}
              </ul>
            )
          }
          {
            attachmentImage && attachmentImage.length > 0 && (
              <img className="mt-4" src={attachmentImage} alt="" draggable="false"/>
            )
          }
          
        </div>
      </div>
    </article>
  )
}