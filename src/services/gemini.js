import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyB2y7vbrApcikru5PVIgcxAiZWM3BwEQxw";

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
You are an expert software project estimator.

The user will describe their project idea.  
Your task is to return a **short**, **clean**, and **well-structured JSX element** (NOT JSON, NOT markdown).

IMPORTANT RULES:
- Output must be strictly **valid JSX**, ready to be rendered inside React.
- Use simple elements only: <div>, <h2>, <p>, <ul>, <li>, <strong>.
- Do NOT add classes (I will apply Tailwind myself).
- Keep the answer **brief but helpful** (3–6 lines per section max).
- No backticks, no markdown formatting, no explanations outside JSX.

Structure the JSX like this:

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

----------------------------------------------------
User Project Description:
"${projectDescription}"
----------------------------------------------------

Now produce the JSX using the structure above.
`;



    console.log("Sending prompt to Gemini...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("Received response from Gemini:", text);
    return text;
  } catch (error) {
    console.error("Error fetching estimation from Gemini:", error);
    return "I'm sorry, I encountered an error while trying to estimate your project. Please try again later. Error details: " + error.message;
  }
};
