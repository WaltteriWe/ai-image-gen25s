import express from 'express';

import thumbnailRoute from './routes/thumbnailRoute';

import {MessageResponse} from '../types/MessageTypes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (_req, res) => {
  res.json({
    message: 'routes: thumbnails',
  });
});

router.use('/thumbnails', thumbnailRoute);

export default router;
