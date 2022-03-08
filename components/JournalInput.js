import React from "react";

export default function JournalInput() {
  const handleSubmit = e => {
    e.preventDefault;
  };
  return (
    <section className="justify-center w-11/12 md:max-w-3xl">
      <form className="w-full flex flex-col justify-center">
        <input
          type="text"
          name="journal"
          id="journal"
          className="w-full h-1/2 bg-slate-300 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white px-2 focus:border-indigo-500"
        />
        <button type="submit" className="border rounded p-4 mt-4" onClick={handleSubmit}>
          Enter today&apos;s entry
        </button>
      </form>
    </section>
  );
}
