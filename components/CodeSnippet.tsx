import React from "react";
export default function CodeSnippet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <pre className="bg-gray-300 p-2 rounded-lg">
      <code>{children}</code>
    </pre>
  );
}
