import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import HeaderOptions from "./HeaderOptions";

export default function Header() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(router.query.term);

  function search(e) {
    e.preventDefault();
    if (!searchInput) return;
    router.push(`/search?term=${searchInput}`);
  }

  return (
    <header className="sticky top-0 bg-white dark:bg-primary-dark dark:text-white font-sans">
      <div className="flex w-full p-6 items-center justify-between">
        <div className="flex items-center flex-col sm:flex-row w-full ">
        <p className="text-xl bg-green-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
          AN-Search
        </p>

          <form className="flex w-full px-6 py-3 mt-5 sm:mt-0 sm:ml-10 sm:mr-5 border-gray-200 rounded-full shadow-md max-w-3xl flex-grow items-center dark:bg-secondary-dark">
            <input
              type="text"
              // ref={searchInputRef}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search AN-Search"
              className="flex-grow w-full focus:outline-none dark:bg-secondary-dark"
            />
            {searchInput && (
              <XIcon
                className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110"
                onClick={() => setSearchInput("")}
              />
            )}
            <button type="submit" onClick={search}>
              <SearchIcon className="h-6 text-blue-500 pl-2 cursor-pointer" />
            </button>
          </form>
        </div>

        <div className="hidden sm:inline-flex">
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
}
