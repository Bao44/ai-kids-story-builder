"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";
import { chatSession } from "@/config/GeminiAi";

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;
export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

function CreateStory() {
  const [formData, setFormData] = useState<formDataType>();
  const [loading, setLoading] = useState(false);

  /**
   * used to add data to form
   * @param data
   */
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData);
  };

  const GenerateStory = async () => {
    setLoading(true);
    const FINAL_PROMPT = CREATE_STORY_PROMPT
      ?.replace("{ageGroup}", formData?.ageGroup ?? "")
      .replace("{storyType}", formData?.storyType ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "")
      .replace("{storySubject}", formData?.storySubject ?? "");
    // Generate AI Story
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result?.response.text());
      // Save in DB
      SaveInDB(result?.response.text());
      
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
    

    // Generate Image
  };

  const SaveInDB=(output:string)=>{

  }

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="font-extrabold text-[70px] text-primary text-center">
        CREATE YOUR STORY
      </h2>
      <p className="text-2xl text-primary text-center">
        Unlock your creativity with AI: Craft stories like never before! Let our
        AI bring your imagination to life, one story at a time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {/* Story Subject */}
        <StorySubjectInput userSelection={onHandleUserSelection} />
        {/* Story Type */}
        <StoryType userSelection={onHandleUserSelection} />
        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />
        {/* Image Style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>

      <div className="flex justify-end my-10">
        <Button
          color="primary"
          className="p-10 text-2xl"
          disabled={loading}
          onClick={GenerateStory}
        >
          Generate Story
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
