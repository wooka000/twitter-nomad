import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/me");
  const router = useRouter();

  useEffect(() => {
    console.log(data);
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
