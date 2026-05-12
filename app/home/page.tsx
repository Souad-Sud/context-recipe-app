"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div>
      <main>
        <h1>Home Page</h1>
        <p>Welcome to your dashboard 🎉</p>
      </main>
    </div>
  );
}
