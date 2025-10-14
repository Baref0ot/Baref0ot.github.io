// src/components/ui/Textarea.jsx
import React from "react";
import clsx from "clsx"; // optional helper for merging class names

export default function Textarea({ className, ...props }) {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full px-3 py-2 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400",
        className
      )}
    />
  );
}
