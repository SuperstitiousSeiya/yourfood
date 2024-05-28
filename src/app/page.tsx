/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LMQebIES4xM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Bevarages, Dessert, MainCourse } from "@/assets";
import Discover from "@/components/landing/Discover";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Discover Delicious Delights
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore a world of culinary adventures, from savory appetizers
                to decadent desserts. Find your next favorite dish with our
                mouthwatering selection.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Link
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              href="#"
            >
              <Image
                alt="Appetizers"
                className="object-cover w-full h-60"
                height="300"
              src={"https://abeautifulmess.com/wp-content/uploads/2023/01/pigs-in-a-blanket.jpg"}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Appetizers</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tantalizing starters to whet your appetite.
                </p>
              </div>
            </Link>
            <Link
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              href="#"
            >
              <Image
                alt="Main Dishes"
                className="object-cover w-full h-60"
                height="300"
                src={MainCourse}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">
                  Main Dishes
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Hearty and satisfying main course options.
                </p>
              </div>
            </Link>
            <Link
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              href="#"
            >
              <Image
                alt="Desserts"
                className="object-cover w-full h-60"
                height="300"
                src={Dessert}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Desserts</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sweet treats to satisfy your cravings.
                </p>
              </div>
            </Link>
            <Link
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              href="#"
            >
              <Image
                alt="Beverages"
                className="object-cover w-full h-60"
                height="300"
                src={Bevarages}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Beverages</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Refreshing drinks to complement your meal.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Discover></Discover>
    </>
  );
}
