import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <ul className="hbtn">
        

                
                <Link href={"/"}><li>Home</li></Link>

                <Link href={"/portfolio"}><li>Portfolio</li></Link>

               <Link href={"/about-me"}> <li>About me</li></Link>
        
               <Link href={"/contact-me"} > <li>Contact me</li></Link>
            </ul>
        </div>
    )
}