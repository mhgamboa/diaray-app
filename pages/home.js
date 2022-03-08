import JournalInput from "../components/JournalInput.js";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="flex flex-col w-full items-center space-y-52 pt-5 bg-red-900">
      <div>
        <h1>Calendar to select journal entries</h1>
      </div>
      <JournalInput />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
