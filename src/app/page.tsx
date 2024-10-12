
import Header from "@/components/header"
import footer from "@/components/footer"
import { Container } from "postcss"
export default function Home() {
  return (
   <div>

    <Header />
    
    <div className="intro">
     <p><b>Hello,I am a beginner student of Web Developer at
      GIAIC Karachi.I am excited to embark on this journey,exploring the world of coding and
      innovative technologies.
      </b></p>
    <img src="/image/images.png"className="dumypic"></img>
    </div>
  
    <footer />

</div>


  )
}
