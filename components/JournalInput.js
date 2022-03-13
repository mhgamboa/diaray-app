import React from "react";

export default function JournalInput() {
  const handleSubmit = e => {
    e.preventDefault;
  };
  return (
    <section className="w-11/12 md:max-w-3xl 2xl:max-w-5xl">
      <form className="w-full flex flex-col justify-center">
        <textarea
          className="form-control block h-full w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white dark:bg-black dark:text-gray-100 focus:border-blue-600 focus:outline-none shadow"
          name="journal"
          id="journal"
          rows="21"
          placeholder="Dear Diary..."
        ></textarea>
        <button type="submit" className="border rounded p-4 mt-4" onClick={handleSubmit}>
          Enter today&apos;s entry
        </button>
      </form>
    </section>
  );
}
