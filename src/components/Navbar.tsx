"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Component() {
  const router  = useRouter()
  const [query, setquery] = useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    router.push(`/search?term=${query}`)
    setquery('')
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm dark:bg-gray-950">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2" href="/">
          <BeefIcon className="w-6 h-6 text-orange-500" />
          <span className="text-lg font-bold">Foodie</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/categories"
          >
            Categories
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Entrees
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Desserts
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Drinks
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <form className="relative w-full max-w-md" onSubmit={handleSubmit}>
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:bg-white focus:ring-1 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-50 dark:focus:bg-gray-700"
            placeholder="Search for dishes..."
            type="search"
            value={query}
            onChange={(e) => {
              const event = e.target
              setquery(event.value);
            }}
          />
        </form>
        {/* <Button className="hidden md:inline-flex" variant="outline">
          <UserIcon className="w-5 h-5 mr-2" />
          Sign In
        </Button> */}
      </div>
    </header>
  );
}

function BeefIcon(props: any) {
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
      <circle cx="12.5" cy="8.5" r="2.5" />
      <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
    </svg>
  );
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
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
