import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class OriginMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const allowedOrigin = process.env.FRONTEND_URL;
    const origin = req.headers.origin;
    if (origin !== allowedOrigin) {
      res.status(403).send('Forbidden');
    } else {
      next();
    }
  }
}
