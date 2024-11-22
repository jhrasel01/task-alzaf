import { GoSearch } from "react-icons/go";

export const Search = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search Product"
        className="bg-custom-bg-2 p-3 rounded-lg w-full"
      />
      <button className="absolute right-0 top-0 w-12 h-12 rounded-lg flex items-center justify-center bg-custom-orang hover:bg-custom-dark-orang text-white text-xl">
        <GoSearch />
      </button>
    </div>
  );
};
