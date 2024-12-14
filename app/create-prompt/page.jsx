"use client";

import { useState } from "react";
<<<<<<< HEAD
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Form from "@/components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { user } = useUser();
=======
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
<<<<<<< HEAD
          userId: user.id,
          tag: post.tag,
          username: user.username,
          imageUrl: user.imageUrl,
          fullname: user.fullName,
          email: user.emailAddresses[0].emailAddress,
=======
          userId: session?.user.id,
          tag: post.tag,
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
