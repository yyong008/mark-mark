import { useState } from "react";

type ToolbarProps = {
  setStatus(v: 0 | 1): void
}


export function Toolbar(props: ToolbarProps) {
  const [data, setData] = useState({
    isPin: false,
    isPreview: false,
  });

  const handlePinToggle = () => {
    setData({
      ...data,
      isPin: !data.isPin,
    });
    window.ipcRenderer.send('toggle-pin', !data.isPin);
  };

  const handlePreviewToggle = () => {
    setData({
      ...data,
      isPreview: !data.isPreview,
    });
    props.setStatus(data.isPreview ? 0 : 1)
  };
  return (
    <div className="flex flex-col absolute right-0 top-[2px] no-drag">
      <button
        className="cursor-pointer"
        onClick={handlePinToggle}
      >
        {data.isPin ?  '📄' : '📌'}
      </button>
      <button className="cursor-pointer" onClick={handlePreviewToggle}>
        {data.isPreview ?  '✏️' : '👀'}
      </button>
    </div>
  );
}
