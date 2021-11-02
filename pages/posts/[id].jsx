import React from "react";

export default function Blog({ post }) {
  console.log("Blog", post.id);
  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((item) => ({
    params: { id: item.id.toString() },
  }));
  console.log("Patch");

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  console.log("props", post.id);
  return {
    props: {
      post,
    },
  };
}
