import React from "react";

export default function JournalInput() {
  return (
    <section className="flex justify-center w-11/12 md:max-w-3xl">
      <form className="w-full flex justify-center">
        <input
          type="text"
          name="journal"
          id="journal"
          height={10}
          width="10"
          className="w-full bg-slate-300 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white px-2 focus:border-indigo-500"
        />
        <button type="submit">Enter today entry</button>
      </form>
    </section>
  );
}
