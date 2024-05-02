import Image from "next/image";
import Home from "@/components/Home";
import Login from "@/components/Login";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return <Login></Login>;
}
