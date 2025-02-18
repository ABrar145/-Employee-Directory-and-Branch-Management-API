import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== 'Bearer valid_token') {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
};