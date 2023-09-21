"use client";

import React from "react";
import { Post } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Post: React.FC<Post> = ({ metadata, content }) => {
  return (
    <article className="flex flex-col space-y-2">
      <h1 className="font-bold text-4xl text-center">{metadata.title}</h1>
      <section className="text-xl text-center">{metadata.subtitle}</section>
      <ReactMarkdown
        className="prose"
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </article>
  );
};

export default Post;
