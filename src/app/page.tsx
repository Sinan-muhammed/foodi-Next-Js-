import Banner from "@/components/Banner";
import Categories from "@/components/Categories";



export default function Home() {

 
  return (
    <main className="mt-[10px] ">
          <div className="banner">
            <Banner/>
          </div>
          <div className="categories">
            <Categories/>
          </div>
    </main>
  );
}
