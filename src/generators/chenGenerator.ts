const dotenv = require("dotenv");

//import { OpenAI } from "langchain/llms/openai";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";

import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";

import { OpenAI, ClientOptions } from "openai";

/*
export async function generateChen(): Promise<string> {
  const llm = new OpenAI({});
  const prompt = PromptTemplate.fromTemplate(
    "What is a good name for a company that makes {product}?"
  );

  const chain = new LLMChain({
    llm,
    prompt,
  });

  // Run is a convenience method for chains with prompts that require one input and one output.
  const result = await chain.run("colorful socks");
  console.log(result);
  return result;
}

export async function generateChenXat(): Promise<string> {
  const template =
    "You are a helpful assistant that translates {input_language} to {output_language}.";
  const systemMessagePrompt =
    SystemMessagePromptTemplate.fromTemplate(template);
  const humanTemplate = "{text}";
  const humanMessagePrompt =
    HumanMessagePromptTemplate.fromTemplate(humanTemplate);

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    systemMessagePrompt,
    humanMessagePrompt,
  ]);

  const chat = new ChatOpenAI({
    temperature: 0,
  });

  const chain = new LLMChain({
    llm: chat,
    prompt: chatPrompt,
  });

  const result = await chain.call({
    input_language: "English",
    output_language: "French",
    text: "I love programming",
  });

  console.log(result);
  return result.text;
}

*/
export async function getConceptualModel(
  databaseProblem: string
): Promise<string> {
  // fer servir dotenv per carregar la clau d'API: en entorn env .env.local
  const envFile = process.env.NODE_ENV === "dev" ? ".env.local" : ".env";
  dotenv.config({ path: envFile });

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613", // Utilitzem el model gpt-3.5-turbo-0613 per a chat
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Donat l'enunciat del problema de la base de dades: "${databaseProblem}", extreu el model conceptual preparat per a la notació Chen.`,
        },
      ],
    });

    console.log(completion.choices[0]?.message?.content);

    return completion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error en obtenir el model conceptual:", error);
    return "";
  }
}
