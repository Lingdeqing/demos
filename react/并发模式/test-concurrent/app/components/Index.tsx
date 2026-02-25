'use client';
import { useState, useTransition } from "react";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";
import TestGetSnapshotBeforeUpdate from "./TestGetSnapshotBeforeUpdate";

export default function Index() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('contact')

  const switchTab = (tab: string) => {
    startTransition(() => setTab(tab))
    // setTab(tab)
  }

  return (
    <div className="p-10" onClick={() => {
      console.log('=====>>> click index')
    }}>
      <div className="flex flex-row gap-2">
        <button className={`px-2 border-1 rounded-1 ${tab === 'about' && 'bg-[#ccc]'}`} type="button" onClick={() => {
          switchTab('about')
        }}>about</button>
        <button className={`px-2 border-1 rounded-1 ${tab === 'posts' && 'bg-[#ccc]'}`} type="button" onClick={() => {
          switchTab('posts')
        }}>posts(slow)</button>
        <button className={`px-2 border-1 rounded-1 ${tab === 'contact' && 'bg-[#ccc]'}`} type="button" onClick={() => {
          switchTab('contact')
        }}>contact</button>
        <button className={`px-2 border-1 rounded-1 ${tab === 'TestGetSnapshotBeforeUpdate' && 'bg-[#ccc]'}`} type="button" onClick={() => {
          switchTab('TestGetSnapshotBeforeUpdate')
        }}>TestGetSnapshotBeforeUpdate</button>
      </div>
      {
        tab === 'about' ? <AboutTab />
          : tab === 'posts' ? <PostsTab />
            : tab === 'TestGetSnapshotBeforeUpdate' ? <TestGetSnapshotBeforeUpdate />
              : <ContactTab />
      }
    </div>
  );
}
