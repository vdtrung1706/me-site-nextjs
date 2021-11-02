import type { NextApiRequest, NextApiResponse } from 'next';

export type SayHelloResponse = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SayHelloResponse>
) {
  // console.log(req.body);
  res.status(201).json({ message: 'Your submission has been received.' });
}
