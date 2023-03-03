import Head from "next/head";
import {
  SearchIcon,
} from "@heroicons/react/solid";

import Footer from "../components/Footer";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen dark:bg-primary-dark dark:text-white group">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Search by AnishNayak" />
          <meta name="theme-color" content="#000" />
          <title>AN-Search</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        </Head>

        {/* Header */}
        <header className="flex w-full items-center justify-between p-5 text-sm text-gray-700 dark:text-gray-300 md:font-medium">

        </header>
        {/* Body */}

        <form className="flex h-96 flex-col items-center justify-center flex-grow w-[80%] sm:w-[90%]">
        <p className="text-6xl w-80 place-self-center	 text-center	 bg-green-500 font-bold text-white py-1 px-2 rounded dark:text-gray-900">
          AN-Search
        </p>

          <div className="flex w-full mt-5 hover:shadow focus-within:shadow  max-w-md rounded-full border border-gray-500 md:hover:border-white dark:bg-gray-700md:dark:hover:border-gray-100 px-5 py-2 sm:py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-5 mr-3 text-gray-500 " />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search on AN-Search"
              className="focus:outline-none w-full flex-grow dark:bg-primary-dark custom-input"
            />
            
          </div>

          <div className="flex flex-row space-y-0 w-[90%] justify-center mt-8 space-x-3 sm:space-x-4  ">
            <button type="submit" onClick={search} className="btn  border-4"	>
            <p className="text-xl font-bold text-black py-1 px-2 rounded  dark:bg-gray-50 dark:text-gray-900">
          Search
        </p>
            </button>
          </div>
        </form>

        <Footer className=" group-even:focus:invisible" />
      </div>

      <div id="portal"></div>
    </>
  );
}
