import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticatedDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token not provided!',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      '9065aa1109090f6b3079c80985e665c8'
    ) as IPayload;

    request.id_deliveryman = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid token!',
    });
  }
}
