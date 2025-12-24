import BackButton from "@/components/BackButton";
import Header from "@/components/Header";

export default function View({children}) {
  return (
    <>
      <Header>        
        <BackButton/>
      </Header>
      <article>

      </article>
    </>
  )
}