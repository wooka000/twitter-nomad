import Link from "next/link";
import useMutation from "./../lib/client/useMutation";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface EnterForm {
  name: string;
  phone: string;
}

interface MutationResult {
  status: string;
  msg: string;
}

export default function createAccount() {
  const [createAccount, { loading, data }] =
    useMutation<MutationResult>("/api/createAccount");
  const { register, handleSubmit } = useForm<EnterForm>();
  const router = useRouter();
  const onValid = (data: EnterForm) => {
    createAccount(data);
  };

  useEffect(() => {
    if (data?.status) {
      alert(data.msg);
      router.push("/log-in");
    }
  }, [data, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-10 space-y-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <path
          fill="#03A9F4"
          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
        ></path>
      </svg>
      <h1 className="text-xl font-bold">Create Account</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="relative flex items-center mb-4 space-x-3 rounded-md shadow-sm">
          <input
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="What's your Name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex mb-4 rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 select-none rounded-l-md bg-gray-50">
            +82
          </span>
          <input
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md rounded-l-none shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="number"
            placeholder="1012345678"
            {...register("phone", { required: true })}
          />
        </div>
        <button className="w-full px-4 font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm h-9 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
          {loading ? "Loading..." : "Create"}
        </button>
        <Link href="/log-in">
          <button className="w-full px-4 mt-2 font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm h-9 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
            Log In
          </button>
        </Link>
      </form>
    </div>
  );
}
