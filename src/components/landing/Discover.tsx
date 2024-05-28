/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vwmom5UIped
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { MainCourse } from "@/assets";
import { useFood } from "@/lib/hooks/useFood";
import Image from "next/image";
import Link from "next/link";
import Categories from "../FoodUI/Categories";

export default async function Discover() {
  return (
    <>
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="550"
              src={MainCourse}
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Discover the Flavors of the World
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore a wide variety of fresh, high-quality food items from
                  different cuisines and categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold tracking-tight">
                  Explore Foods categories
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Browse through our wide selection of fresh and delicious food
                  items.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {/* <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Fruits</span>
                </Link>
                <Image
                  alt="Fruits"
                  className="object-cover w-full h-60"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-semibold text-lg md:text-xl">Fruits</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Juicy and nutritious
                  </p>
                </div>
              </div> */}
              <Categories></Categories>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
