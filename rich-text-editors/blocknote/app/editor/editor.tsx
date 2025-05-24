import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

export default function BlockEditor() {
  const editor = useCreateBlockNote();

  return <BlockNoteView editor={editor} />;
}