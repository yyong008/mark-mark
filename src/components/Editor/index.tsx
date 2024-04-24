import { useState } from "react";

type EditorProps = {
  content: string
  setContent(v: string): void
}


export const Editor = (props: EditorProps) => {
  const [value, setValue] = useState(props.content);
  return (
    <textarea
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        props.setContent(e.target.value)
      }}
      className="no-drag h-[90vh] w-[100%] p-[10px] text-black bg-yellow-300 border-hidden outline-none resize-none"
      placeholder="输入内容（markdown）..."
    ></textarea>
  );
};
