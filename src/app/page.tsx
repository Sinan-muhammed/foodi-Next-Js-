import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="mt-[10px]">
          <div className="h-[1000px] w-full bg-slate-600">
            <div className="">
              <h1>Dive into Delights <br/> Of Delectable</h1>
              <h1>Food</h1>
              <p>Where Each Plate Weaves a Story of <br/> Culinary Mastery and Passionate Craftsmanship</p>
              <div>
                <button><Link href='/products'>Order Now</Link></button>
                <div>
                <h1>Watch Video</h1>
                <div>
                  <Image src='/playbutton.png' alt="plybutton" width={10} height={12}/>
                </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
    </main>
  );
}
