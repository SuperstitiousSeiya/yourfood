"use client"
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"
import { ChangeEvent, useState } from "react";

export default function FoodSearchBar({value}: {value: string}) {
    const [query, setQuery] = useState(value);
    const router = useRouter();
  
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      setQuery(term);
      router.push(`/search?term=${term}`);
   
    };
  

  return (
    <div className="flex justify-center py-8 px-4">
      <div className="relative w-full max-w-2xl">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-12 pr-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-indigo-500"
          placeholder="Search for food..."
          type="search"
          value={query}
          autoFocus
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}




function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}