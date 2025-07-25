import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';
console.log("Starting the AI content generation...");
const prompt = "analyze this bank statement and create a visual representation of the spendings"

const ai = new GoogleGenAI({ apiKey: "" });

async function main() {
    const contents = [
        { text: prompt },
        {
            inlineData: {
                mimeType: 'application/pdf',
                data: Buffer.from(fs.readFileSync("sakthistatement.pdf")).toString("base64")
            }
        }
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents
    });
    console.log(response.text);
}

main();