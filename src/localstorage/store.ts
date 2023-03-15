import {GeneratedImage} from "../types/image";

export const getHistoricalDataFromStorage = (): GeneratedImage[] => {
    const storedGeneratedImagesJson = localStorage.getItem("generatedImages");

    return storedGeneratedImagesJson ? JSON.parse(storedGeneratedImagesJson) : [];
}

export const storeGeneratedImage = (image: GeneratedImage) => {
    const currentItems = getHistoricalDataFromStorage();

    localStorage.setItem("generatedImages", JSON.stringify([image, ...currentItems]));

}