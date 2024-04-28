import type { NextPage } from "next";
import { Tweet, User } from "@prisma/client";
import useMutation from "../../lib/client/useMutation";
import useSWR from "swr";
import { useRouter } from "next/router";

interface TweetWithUser extends Tweet {
  user: User;
}

interface TweetDetailResponse {
  status: string;
  tweet: TweetWithUser;
  isLiked: boolean;
}

const TweetDetail: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<TweetDetailResponse>(
    router.query.id ? `/api/tweets/${router.query.id}` : null
  );
  console.log(data);

  const [toggleLike] = useMutation(`/api/tweets/${router.query.id}/like`);
  const onLikeClick = () => {
    if (!data) return;
    mutate({ ...data, isLiked: !data.isLiked }, false);
    toggleLike({});
  };

  return (
    <div className="p-4 space-y-4 mt-72">
      <div className="text-lg font-bold">
        <span className="italic">Writer:</span> {data?.tweet.user.name}
      </div>
      <div className="border-2 p-20 border-blue-500 w-full resize-none min-h-[100px] placeholder:pt-1 pl-2">
        {data?.tweet.message}
      </div>
      <button
        onClick={onLikeClick}
        className={
          "w-full flex items-center justify-center h-9 boder-1 border-blue-500 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium"
        }
      >
        <svg
          className="w-7 h-7"
          fill={data?.isLiked ? "blue" : "none"}
          stroke="blue"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default TweetDetail;
