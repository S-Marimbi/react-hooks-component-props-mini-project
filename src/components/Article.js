import React from "react";

function Article({ title, date, preview }) {
  // Set default value for date if not provided
  date = date ? date : "January 1, 1970";

  // Set default value for preview if not provided
  preview = preview ? preview : "No preview available";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;