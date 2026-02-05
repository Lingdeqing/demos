'use client'
import { useEffect, useRef, useState } from 'react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'

import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import { WebrtcProvider } from "y-webrtc"


export default () => {
  const ydocRef = useRef<Y.Doc>(null)
  const providerRef = useRef<WebrtcProvider>(null)
  if (!ydocRef.current) {
    ydocRef.current = new Y.Doc()
    // webRTC跨浏览器跨网络不稳定，实际生产环境中还是用y-websocket稳定，这边只是为了演示简单
    // providerRef.current = new WebrtcProvider("demo-room-123", ydocRef.current, { signaling: ['ws://localhost:4444'] })
    providerRef.current = new WebrtcProvider("demo-room-123", ydocRef.current)
  }
  const ydoc = ydocRef.current!
  const provider = providerRef.current!

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      Document,
      Paragraph,
      Text,
      Collaboration.configure({
        document: ydoc, // Configure Y.Doc for collaboration
      }),
    ]
  })
  useEffect(() => {
    const init = () => {
      // sync事件同一个浏览器不同的tab页面之间可能不会触发，得同时打开两个chrome，才会触发
      console.log('====>>>sync')
      if (!ydoc.getMap('config').get('initialContentLoaded') && editor) {
        ydoc.getMap('config').set('initialContentLoaded', true)

        editor.commands.setContent(`
          <p>This is a radically reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.</p>
          <p>The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.</p>
          `)
      }
    }
    init()
    provider.on("synced", init)
    return () => {
      provider.off('synced', init)
    }
  }, [editor])

  return <EditorContent editor={editor} />
}