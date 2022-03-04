import JournalInput from "../components/JournalInput.js";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center space-y-52 mt-5">
        <div>
          <h1>Calendar to select journal entries</h1>
        </div>
        <JournalInput />
      </div>
    </>
  );
}
