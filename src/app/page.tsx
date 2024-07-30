import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Dishes from "@/components/Dishes";
import Testimonials from "@/components/Testimonials";
import Story from '@/components/Story'

export default function Home() {

 
  return (
    <main className="md:mt-[10px] mt-[2px] ">
          <div className="banner">
            <Banner/>
          </div>
          <div className="categories">
            <Categories/>
          </div>
          <div className="Dishes">
            <Dishes/>
          </div>
          <div className="Test">
            <Testimonials/>
          </div>
          <div className="Test">
            <Story/>
          </div>
    </main>
  );
}
