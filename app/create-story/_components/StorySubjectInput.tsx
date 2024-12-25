import { Textarea } from "@nextui-org/input";
import React from "react";

function StorySubjectInput({ useSelection }: any) {
  return (
    <div>
      <label className="font-bold text-4xl text-primary">
        1. Subject of the story
      </label>
      <Textarea
        placeholder="Write a subject of the story which you want to generate"
        size="lg"
        classNames={{
          input: "resize-y min-h-[230px] text-2xl p-5",
        }}
        className="mt-3 max-w-lg"
        onChange={(e) =>
          useSelection({
            fieldValue: e.target.value,
            fieldName: "storySubject",
          })
        }
      />
    </div>
  );
}

export default StorySubjectInput;
