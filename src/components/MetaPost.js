export default function MetaPost(props) {
  return (
    <dl className="flex items-center">
      <dt className="text-sm font-medium mr-1">작성자</dt>
      <dd className="text-sm text-gray-600 mr-2">{props.author}</dd>
      <dt className="text-sm font-medium mr-1">작성일</dt>
      <dd className="text-sm text-gray-600 mr-2">{props.date}</dd>
      <dt className="text-sm font-medium mr-1">조회수</dt>
      <dd className="text-sm text-gray-600">{props.views}</dd>
    </dl>
  )
}