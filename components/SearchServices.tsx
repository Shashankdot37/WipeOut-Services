"use client";
import Image from "next/image";
import { services } from "@/constants";
import {
  Combobox,
  Transition,
  ComboboxInput,
  ComboboxOption,
  ComboboxButton,
  ComboboxOptions,
} from "@headlessui/react";
import { useState, Fragment } from "react";
import { SearchServicesProps } from "@/types";
const SearchServices = ({ service, setService }: SearchServicesProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const filteredServices =
    query === ""
      ? services
      : services.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={service || ""} onChange={(value:string)=>{
        setService(value);
        setIsOpen(false)
      }
      } >
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/truck.png"
              alt="services"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Choose the service"
            displayValue={(service: string) => service || ""}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={()=>{setIsOpen(true)}}
            onBlur={()=>setTimeout(() => {
                setIsOpen(false)
            }, 200)}
          />
          <Transition
            as={Fragment}
            show={isOpen}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions>
              {filteredServices.length === 0 && query !== "" ? (
                <ComboboxOption
                    as = "div"
                  value={query}
                  className="search-manufacturer__option"
                >
                  No result for "{query}""
                </ComboboxOption>
              ) : (
                filteredServices.map((item) => (
                  <ComboboxOption
                    value={item}
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-green-800 text-white" : "text-gray-500 bg-green-100"
                      }`
                    }
                  >
                    {item}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchServices;
