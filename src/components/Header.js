export default function Header({children}) {
  return (
    <header className="sticky flex justify-between items-center h-12 px-4">
      {children}
    </header>
  )
}