import React from "react";
import { signIn } from "next-auth/react";

const LoginModal = ({ modal, setModal }) => {
  const button = "block w-full text-center border border-gray-200 p-2 rounded-md min-w-10";

  return (
    <div
      className={`${modal} -translate-x-2/4 left-1/2 top-1/4 mt-16 p-2 flex flex-col rounded-md fixed items-center justify-center bg-red-400`}
    >
      <div className="w-full text-right">
        <a
          className="cursor-pointer"
          href="#"
          onClick={e => {
            e.preventDefault();
            setModal("hidden");
          }}
        >
          X
        </a>
      </div>
      <div className="pt-4 pb-2 space-y-2">
        <div className={button}>
          <button
            onClick={e => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Github
          </button>
        </div>
        <div className={button}>
          <button
            onClick={e => {
              e.preventDefault();
              signIn("google");
            }}
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
