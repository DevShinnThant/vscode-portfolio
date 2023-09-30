import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="mb-3">
      <form
        onSubmit={onSubmit}
        className="relative w-80 mb-4 flex  flex-wrap items-stretch"
      >
        <input
          type="search"
          className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-gray-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
          placeholder="Search"
          aria-label="Search"
          autoComplete="off"
          aria-describedby="button-addon2"
        />

        <span
          className="input-group-text cursor-pointer flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-500"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
