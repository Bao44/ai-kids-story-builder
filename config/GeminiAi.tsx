const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and magic school, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "storyTitle": "Leo and the Papercut School of Magic",\n  "storyCover": {\n    "imagePrompt": "A paper cut style illustration of a young boy with bright eyes and slightly messy brown hair, wearing a simple blue t-shirt and shorts, standing in front of a whimsical school building made of layered paper. The school has tall, slightly crooked towers, colorful windows in various shapes, and a large arched doorway. The sky is a bright yellow with paper-cut style clouds and stars. The title of the book \'Leo and the Papercut School of Magic\' is in a playful, bold font, positioned above the school building.",\n    "imageDescription": "A vibrant and inviting cover illustration that immediately draws the reader into a world of paper and magic."\n  },\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterTitle": "The Whispering Book",\n      "storyText": "Leo loved exploring! One sunny afternoon, while rummaging in his attic, he found an old, leather-bound book. It wasn\'t just any book; its pages seemed to whisper! When Leo opened it, a swirl of paper scraps lifted him off the ground, and poof! He landed in front of a peculiar school.",\n      "imagePrompt": "A paper cut style illustration showing a messy attic scene with cardboard boxes and old toys. In the center, Leo, rendered in paper cut style with slightly messy brown hair, is opening a big brown leather-bound book. Paper scraps are swirling around him, lifting him slightly off the ground. The attic has muted colors to contrast with the bright colors that follow. We see the tip of an arched papercut doorway in the foreground of swirling papers.",\n      "imageDescription": "A scene of discovery with the swirling paper scraps adding a sense of motion and magic."\n    },\n    {\n      "chapterNumber": 2,\n      "chapterTitle": "The Papercut Classroom",\n      "storyText": "The school was made of paper! There were classrooms with desks crafted from folded cardstock, paper lanterns lighting the hallways, and teachers made from intricately cut paper. Miss Feather, a paper-cut owl with wise eyes, greeted him. \'Welcome, Leo,\' she hooted, \'to the Papercut School of Magic!\'",\n      "imagePrompt": "A paper cut style illustration of a classroom with desks and benches made from folded cardstock. Paper lanterns hang from the ceiling, casting a warm glow. Miss Feather, a paper cut owl with large, expressive paper cut eyes, is standing near the front, greeting Leo, who has a surprised expression on his face. The walls are decorated with paper cut geometric shapes. The colors are bright and cheerful.",\n      "imageDescription": "A whimsical classroom scene showcasing the unique design of the papercut world."\n    },\n    {\n     "chapterNumber": 3,\n      "chapterTitle": "Learning the Spells",\n       "storyText": "Leo learned amazing things! He folded paper birds that actually flew, cut out paper flowers that bloomed before his eyes, and learned to create mini paper thunderstorms with a flick of his wrist! It wasn\'t always easy, sometimes his paper birds would turn into paper hats, but Leo kept practicing.",\n       "imagePrompt": "A paper cut style illustration showing Leo in the classroom, practicing magic. There are paper birds flying erratically, some turned into paper hats. Paper flowers are blooming on a table. The background shows other paper cut children practicing magic with varied success. Leo has a determined expression and is focused on his work. The colors are vibrant and slightly chaotic to reflect the nature of learning and practicing.",\n       "imageDescription":"A dynamic scene showing Leo engaged in magical activities, highlighting the playful and challenging aspects of learning magic."\n    },\n    {\n      "chapterNumber": 4,\n      "chapterTitle": "The Tricky Paper Dragon",\n       "storyText": "One day, they had to create paper dragons. Leo’s dragon was magnificent! But it was also a little mischievous. It zoomed around the school, playfully stealing paperclips and teacher’s glasses. Leo had to learn to control his magic!",\n       "imagePrompt": "A paper cut style illustration showing a vibrant paper cut dragon flying through the school hallway. The dragon has a mischievous grin and is holding paperclips in its mouth. Paper cut children are running and laughing, some trying to catch the dragon. Miss Feather is flapping her paper wings in surprise, her glasses askew. The colors are bright and the scene is full of action and fun.",\n       "imageDescription": "A playful scene with a mischievous dragon causing some lighthearted chaos in the school."\n    },\n    {\n      "chapterNumber": 5,\n     "chapterTitle": "Back to the Attic, But with Magic!",\n      "storyText":"Finally, it was time for Leo to go home. With a final swirl of paper, the book whisked him back to the attic. He closed the book, a smile on his face. He knew he wouldn\'t forget his adventures at the Papercut School of Magic. And now, he could make paper birds that actually flew in his attic!",\n     "imagePrompt": "A paper cut style illustration of Leo back in the messy attic, but now, he has some paper cut birds flying around him. He is holding the closed leather book and smiling. The attic has the same muted color scheme as the first image. The flying birds stand out in bright, cheerful colors. Some paper cut shapes from his magic practice are scattered on the floor. There is a sense of accomplishment and wonder on Leo’s face. ",\n      "imageDescription": "A heartwarming scene of Leo returning from his magical adventure, carrying his new skills and memories with him."\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
