import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Tweet } from "@prisma/client";
import useMutation from "../../lib/client/useMutation";

interface UploadProductForm {
  tweetImg?: FileList;
  message?: number;
  tweetImgId?: string;
}

interface UploadProductMutaion {
  status: string;
  tweet: Tweet;
}

const Upload: NextPage = () => {
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadTweet, { loading, data }] =
    useMutation<UploadProductMutaion>("/api/tweets");
  const router = useRouter();

  const onValid = async (data: UploadProductForm) => {
    if (loading) return;
    uploadTweet(data);
  };

  useEffect(() => {
    if (data?.status === "success") {
      router.push(`/tweet/${data.tweet.id}`);
    }
  }, [data, router]);

  return (
    <form className="p-4 space-y-4 mt-72" onSubmit={handleSubmit(onValid)}>
      <h1 className="text-xl font-bold">Upload!</h1>
      <textarea
        {...register("message", { required: true })}
        name="message"
        className="border-2 border-[#0065fc] w-full resize-none min-h-[100px] placeholder:pt-1 pl-2"
        placeholder="Write Your Text"
        required
      />
      <button className="w-full  h-9 bg-[#0065fc] hover:bg-blue-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
        {loading ? "Loading" : "Upload Tweet"}
      </button>
    </form>
  );
};

export default Upload;
