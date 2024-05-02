import { Search } from "@/components/Search";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function SearchPage() {
  const router = useRouter();
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token]);

  return <Search />;
}
