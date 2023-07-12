import publicIp, { publicIpv4 } from 'public-ip';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const ip = await publicIpv4();
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.status(200).json({ ip });
  } catch (error) {
    console.error('Failed to fetch IP address:', error);
    res.status(500).json({ error: 'Failed to fetch IP address' });
  }
};