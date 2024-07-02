import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { MdCurrencyRupee } from "react-icons/md";
import star from '../../../public/star.png'
import wishList from '../../../public/wishlist.png'
import addWishlist from '../../../public/colourd-wishlist.png'
import Link from "next/link";

async function serverSideFetch() {
  const res = await fetch('https://dummyjson.com/recipes/tag/Pakistani');
  if (!res.ok) {
    throw new Error('api calling failed');
  }
  return res.json();
}

type Recipe = {
  id: number;
  name: string;
  ingredients: [];
  instructions: [];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: [];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: [];
};

const MainDish = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [clickWishList, setClickWishList] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await serverSideFetch();
        if (data && data.recipes) {
          setRecipes(data.recipes);
        } else {
          throw new Error('Error fetching recipes');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex md:gap-[40px] gap-[48px]">
      {recipes.map((val) => (
        <div key={val.id} className="flex flex-col md:h-[420px] h-[350px] md:w-[340px] w-[270px] bg-[#FFFFFF] relative rounded-[40px] justify-between pt-[50px] pb-[40px] gap-[12px] shadow-2xl">
          <Link href={`/product/${val.id}`}>
            <div className="h-[200px] w-full flex justify-center items-center">
              <img src={val.image} alt="" className="w-[150px] h-[150px] object-cover rounded-full" />
            </div>
            <div className="flex justify-center flex-col pl-[50px] pr-[30px]">
              <h1 className="text-[18px] text-wrap font-bold line-clamp-1">{val.name}</h1>
              <h1 className="text-wrap text-[15px] font-semibold line-clamp-1 text-[#555555]">{val.ingredients}</h1>
            </div>
          </Link>
          <div className="flex items-center gap-[100px] md:gap-[150px] md:pl-[40px] md:pr-[40px] pl-[40px] pr-[40px]">
            <div className="flex items-center justify-center gap-[2px]">
              <MdCurrencyRupee className="text-[#FF6868]" />
              <h1 className="font-bold text-[21px]">{val.caloriesPerServing}</h1>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
              <Image src={star} alt="rating" className="w-[18px] h-[18px]" />
              <h1 className="font-semibold">{val.rating}</h1>
            </div>
          </div>
          <div
            onClick={() => {
              setClickWishList((prev) => (prev === val.id ? null : val.id));
              console.log('clickWishlist', clickWishList === val.id ? false : true);
            }}
            className="absolute bg-[#39DB4A] h-[60px] rounded-tr-3xl rounded-bl-3xl w-[60px] top-0 right-0 flex items-center justify-center"
          >
            <Image src={wishList} alt="wishlist" className={clickWishList === val.id ? 'hidden' : 'w-[18px] h-[18px]'} />
            <Image src={addWishlist} alt="add to wishlist" className={clickWishList === val.id ? 'w-[18px] h-[18px]' : 'hidden'} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainDish;
