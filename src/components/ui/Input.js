export default function Input({
  type="text",
  value,
  placeholder,
  name,
}) {
  return (
    <input 
      type={type} 
      name={name} 
      value={value} 
      placeholder={placeholder} 
      className="inline-block w-full h-10 px-2 border border-gray-500 rounded-sm"
    />
  )
}