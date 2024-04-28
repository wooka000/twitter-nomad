import { Tweet, User } from "@prisma/client";
import React, { useEffect } from "react";
import useSWR from "swr";
import useUser from "../lib/client/useUser";
import Item from "./../components/Item";
import Layout from "./../components/Layout";
import Button from "./../components/Button";
import { useRouter } from "next/router";

interface TweetWithCount extends Tweet {
  user: User;
  _count: {
    likes: number;
  };
}

interface TweetsResponse {
  status: string;
  tweets: TweetWithCount[];
}

export default function Home() {
  const { user, isLoading } = useUser();
  const { data } = useSWR<TweetsResponse>("/api/tweets");
  const router = useRouter();
  useEffect(() => {
    if (user === undefined) {
      router.push("/log-in");
    }
  }, [user]);

  return (
    <>
      {user && !isLoading && (
        <Layout title="Home" hasTabBar>
          <div className="flex flex-col space-y-4 divide-y">
            {data?.tweets?.map((tweet) => (
              <Item
                id={tweet.id}
                key={tweet.id}
                message={tweet.message!}
                tweetImg={tweet.image!}
                createDate={tweet.createdAt}
                userId={tweet.userId}
                userName={tweet.user.name}
                likesCount={tweet._count.likes}
              />
            ))}
            <Button href="/tweet/upload">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Button>
          </div>
        </Layout>
      )}
    </>
  );
}
