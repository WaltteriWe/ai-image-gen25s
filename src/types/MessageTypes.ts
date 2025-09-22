type MessageResponse = {
  message: string;
};

type ErrorResponse = MessageResponse & {
  stack?: string;
};

type ImageGenerationRequest = {
  topic: string;
  text?: string;
};

type ImageResponse = {
  created: number;
  revised_prompt: string;
  data: {
    url: string;
  };
};

export {MessageResponse, ErrorResponse, ImageGenerationRequest, ImageResponse};
