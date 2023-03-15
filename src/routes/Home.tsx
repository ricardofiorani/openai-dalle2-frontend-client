import {useState} from 'react';
import {imageFetcher} from "../openai/api";

const Home: React.FC = () => {
    const [prompt, setPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        setIsLoading(true);
        const url = await imageFetcher(prompt);
        setImageUrl(url);
        setIsLoading(false);
    };

    const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(event.target.value);
    }

    return (
        <div className="App">
            <div>
                Prompt:
            </div>
            <div>
                <textarea disabled={isLoading} value={prompt} onChange={handlePromptChange}/>
                <button disabled={isLoading} onClick={handleGenerate}>
                    {isLoading ? "Loading..." : "Generate"}
                </button>
            </div>
            {imageUrl && !isLoading && (
                <div>
                    <img src={imageUrl} alt="Generated by OpenAI"/>
                </div>
            )}
        </div>
    );
}

export default Home;
