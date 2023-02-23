import { GlobeIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

export default function Footer({ className }) {
  const [currentCountry, setCurrentCountry] = useState(null);

  const url = `https://api.ipdata.co/?api-key=${process.env.NEXT_PUBLIC_GEOLOCATION_API}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentCountry(data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <footer
      className={`relative lg:sticky sm:mt-0 bottom-0 flex justify-between w-full divide-y-[1px] divide-gray-300 bg-gray-100 dark:bg-secondary-dark text-sm ${className}`}>
      {currentCountry && (
        <div className=" py-3 px-1 flex items">
          
            <LocationMarkerIcon className="h-5 text-gray-500 mr-2" />
          
          <div className="capitalize">{`${currentCountry.region}, ${currentCountry.country_name}`}</div> 
         
          
        </div>
        

      )}
      <div className="grid justify-items-end px-8 py-3"><div >© 2023 AnishNayak, Inc.</div></div>

      
    </footer>
  );
}
