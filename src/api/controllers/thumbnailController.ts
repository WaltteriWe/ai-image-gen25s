import {Request, Response, NextFunction} from 'express';
import CustomError from '../../classes/CustomError';
import fetchData from '../../lib/fetchData';

const imagePost = async (
  req: Request<{}, {}, {text: string}>,
  res: Response<{response: string}>,
  next: NextFunction
) => {
  try {
    const request = {
      prompt: req.body.text,
      size: '1024x1024',
      model: 'dall-e-3',
    };

    if (!process.env.OPENAI_API_URL) {
      throw new CustomError('No api url', 500);
    }

    const image = await fetchData<any>(
      process.env.OPENAI_API_URL + '/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      }
    );

    console.log(image);

    const responseUrl = image.data[0]?.url;

    if (!responseUrl) {
      throw new CustomError('No response from AI', 500);
    }

    res.status(200).json({response: responseUrl});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export {imagePost};