import { useState } from "react";
import "./App.css";
import { Editor, EditorPreview, Toolbar } from "./components";

function App() {
  const [content, setContent] = useState('');
  const [statu, setStatus] = useState(0);
  return (
    <div className="relative">
      <Toolbar setStatus={setStatus} />
      <div className="w-[90%] bg-yellow-300 h-[100vh] rounded-lg overflow-hidden">
        {statu === 0 ? <Editor content={content} setContent={setContent}/> : null}
        {statu === 1 ? <EditorPreview content={content} /> : null}
      </div>
    </div>
  );
}

export default App;
