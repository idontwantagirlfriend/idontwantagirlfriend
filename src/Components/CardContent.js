import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CardContent(props) {
  const markdown = props.markdown;
  return (
    <div className="card-text">
      <ReactMarkdown children={markdown} remarkPlugins={remarkGfm} />
    </div>
  );
}
