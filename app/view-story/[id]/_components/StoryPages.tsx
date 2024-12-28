import React from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

function StoryPages({ storyChapter }: any) {
  const playSpeech = (text: string) => {
    const synth = window?.speechSynthesis;
    const textToSpeech = new SpeechSynthesisUtterance(text);
    synth.speak(textToSpeech);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary">
        {storyChapter?.chapterTitle}
        <span
          className="text-3xl cursor-pointer"
          onClick={() => playSpeech(storyChapter?.storyText)}
        >
          <MdOutlinePlayCircleFilled />
        </span>
      </h2>
      <p className="text-xl p-10 mt-3 rounded-lg bg-slate-100">
        {storyChapter?.storyText}
      </p>
    </div>
  );
}

export default StoryPages;
