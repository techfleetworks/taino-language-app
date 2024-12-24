import React, { useState } from 'react';

export interface LessonAdminComponentProps {
  meta: {
    defaultOGImageType: "dynamic" | "off" | "static";
    description: string;
    icons: {
      color: string;
      fetchPriority: "auto" | "high" | "low";
      media: string;
      rel: string;
      sizes: string;
      type: string;
      url: string;
    }[];
    keywords: string;
    openGraph: object;
    title: string;
    titleSuffix: string;
  };
  actions: string[];
}
//TODO: add to /src/collections/Lesson.ts
const LessonAdminComponent: React.FC<LessonAdminComponentProps> = (props) => {
  const { meta, actions } = props;
  const [title, setTitle] = useState(meta.title || '');

  return (
    <div>
      <h1>Custom Lesson Admin Component</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter lesson title"
      />
      {/* Add more custom fields or UI elements as needed */}
    </div>
  );
};

export default LessonAdminComponent;
