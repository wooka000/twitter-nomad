import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../lib/client/utils";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  };
  return (
    <div className="flex justify-center">
      <div className="w-[576px] ">
        <div className="bg-[#0065fc] w-full h-12 max-w-xl justify-center text-lg px-10 font-medium text-white border-b top-0  flex items-center">
          {canGoBack ? (
            <button onClick={onClick} className="">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          ) : null}
          <div className="flex items-center justify-between w-full">
            {title ? (
              <span className={cls(canGoBack ? "mx-auto" : "", "")}>
                {title}
              </span>
            ) : null}
            <div className="flex space-x-6"></div>
          </div>
        </div>
        <div className={cls("pt-12", hasTabBar ? "pb-24" : "")}>{children}</div>
        {hasTabBar ? (
          <nav className="fixed bottom-0 flex justify-around w-full max-w-xl text-xs text-gray-700 bg-white border-t">
            <Link href="/" legacyBehavior>
              <div
                className={cls(
                  "w-[50%] h-auto py-1 cursor-pointer",
                  router.pathname === "/" ? "bg-[#0065fc]" : "bg-white"
                )}
              >
                <a
                  className={cls(
                    "flex flex-col items-center space-y-2",
                    router.pathname === "/" ? "text-white" : "text-gray-500"
                  )}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  <span>Home</span>
                </a>
              </div>
            </Link>
            <Link href="/my-page" legacyBehavior>
              <div
                className={cls(
                  "w-[50%] h-auto py-1 cursor-pointer",
                  router.pathname === "/my-page" ? "bg-[#0065fc]" : "bg-white"
                )}
              >
                <a
                  className={cls(
                    "flex flex-col items-center space-y-2 ",
                    router.pathname === "/my-page"
                      ? "text-white"
                      : "text-gray-500"
                  )}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <span>MyPage</span>
                </a>
              </div>
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
