"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
<<<<<<< HEAD
import { useUser } from "@clerk/nextjs"; // Added for Clerk
import Profile from "@/components/Profile";
=======

import Profile from "@components/Profile";
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
<<<<<<< HEAD
  const { user } = useUser(); // Use Clerk's user

  const [userPosts, setUserPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchParams = async () => {
      const id = await params.id;
      setUserId(id);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!userId) return;
      const response = await fetch(`/api/users/${userId}/posts`);
=======

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
      const data = await response.json();

      setUserPosts(data);
    };

<<<<<<< HEAD
    fetchPosts();
  }, [userId, user?.id]);
=======
    if (params?.id) fetchPosts();
  }, [params.id]);
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
