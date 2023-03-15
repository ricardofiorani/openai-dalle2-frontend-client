
# Openai Dalle 2 - Frontend client

This is a local frontend client that consumes the OpenAI Dalle-2 to generate an image from a prompt. 
It was built using React and Vite.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

To run this project, you need to follow these steps:

1.  Clone the repository locally
2.  Install the dependencies by running `yarn`
3.  Rename the file `.example.env` to `.env`
4.  Open `.env` and add your OpenAI API key
5.  Run the project locally by running `yarn dev`

## Usage

This project has two pages:

1.  **Generate Image**: This page allows you to generate a single image based on a prompt. Simply enter your prompt and click on the "Generate" button. The image will be displayed on the screen.

2.  **Gallery**: This page displays a gallery of all the previously generated images. The images and their corresponding prompts are stored locally using local storage.

## But Why?
If you use Dalle on OpenAI labs, after the free tier you will have to pay for credits to generate images.

The minimum amount of credits you can buy is 115 for $15, which will give you 460 images as each credit generates 4 images.

If you use the API directly, you can generate 750 images for $15 as the price is $0.02 per image (1024x1024).

That's a 64% discount!

## Contributing

If you would like to contribute to this project, please follow these steps:

1.  Fork the repository
2.  Create a new branch for your changes
3.  Make your changes and commit them
4.  Push your changes to your fork
5.  Submit a pull request

## License

This project is licensed under the [MIT License](https://github.com/ricardofiorani/openai-dalle2-frontend-client/blob/main/LICENSE).