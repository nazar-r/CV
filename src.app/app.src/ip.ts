import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const forwarded = req.headers['x-forwarded-for'];

  const ip = Array.isArray(forwarded)
    ? forwarded[0]
    : forwarded?.split(',')[0] || req.socket.remoteAddress || null;

  console.log("Visitor IP:", ip);

  res.status(200).json({ ok: true });
}