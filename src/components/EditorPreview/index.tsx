type EditorPreviewProps = {
  content: string
}

export function EditorPreview(props: EditorPreviewProps) {
  return (
    <div
      className="no-drag h-[90vh] w-[100%] p-[10px] text-black bg-yellow-300 border-hidden outline-none resize-none"
      dangerouslySetInnerHTML={{
        // __html: props.content,
        __html: window.ipcRenderer.renderMarkdown(props.content),
      }}
    ></div>
  );
}
