"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  function navigate() {
    router.push("/user/" + userId);
  }

  return (
    <div>
      <Link href="/about/contact">Contact</Link>
      <Link href="/about">About</Link>
      <div>
        <input
          type="text"
          placeholder="user id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={navigate}>Go to Profile</button>
      </div>
    </div>
  );
}
