import { GoogleGenerativeAI } from "@google/generative-ai";
import profileData from "../constants/profileData";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const getProjectEstimation = async (projectDescription) => {
  console.log("getProjectEstimation called with:", projectDescription);
  console.log("Using API Key:", API_KEY ? "Present" : "Missing");

  if (!API_KEY) {
    console.error("VITE_GEMINI_API_KEY is not set");
    return "I'm sorry, I can't provide an estimation right now because my API key is missing. Please contact the administrator.";
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `
You have two modes:

1) **Personal Question Mode**
   - Triggered when the user asks about ME: my experience, skills, projects, background, tools I use, my rates, my work style, etc.
   - Use ONLY the information inside: profileObject
   - Always answer using **first-person** tone ("I have 5 years...", "I built...", "My experience includes...")
   - Return the answer as **plain JSX** inside a single <div>.
   - Keep answers brief (1–3 short sentences).
   - No classes, no markdown.

2) **Estimation Mode**
   - Triggered when the user describes a project or requests a quote.
   - Use ONLY the rules below and produce a short project estimation.
   - Return strictly valid JSX with this structure:

<div>
  <h2>Price Estimation</h2>
  <p>...</p>

  <h2>Time Estimation</h2>
  <p>...</p>

  <h2>Summary</h2>
  <ul>
    <li>Key complexity point...</li>
    <li>Suggested tech stack item...</li>
    <li>1 recommendation...</li>
  </ul>
</div>

   - No markdown, no backticks, no classes.
   - Keep each section short.

----------------------------------------------------
profileObject:
${JSON.stringify(profileData)}

User Message:
"${projectDescription}"
----------------------------------------------------

Now decide the correct mode and produce the JSX output only.
`;

    console.log("Sending prompt to Gemini...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("Received response from Gemini:", text);
    return text;
  } catch (error) {
    console.error("Error fetching estimation from Gemini:", error);
    return (
      "I'm sorry, I encountered an error while trying to estimate your project. Please try again later. Error details: " +
      error.message
    );
  }
};
