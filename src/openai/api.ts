import {Configuration, OpenAIApi} from "openai";
import {storeGeneratedImage} from "../localstorage/store";
import {CreateImageRequestSizeEnum} from "openai/api";

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY as string,
});

export const openAiApi = new OpenAIApi(configuration);
export const imageFetcher = async (prompt: string, amount = 1,size: CreateImageRequestSizeEnum = '1024x1024'): Promise<string> => {
    const response = await openAiApi.createImage({
        prompt,
        n: amount,
        size,
    });

    const url = response.data.data[0].url;

    if (!url) {
        console.error(url);
        throw new Error("Error from OpenAI API: No image URL returned.");
    }

    storeGeneratedImage({prompt, url});

    return url;
}