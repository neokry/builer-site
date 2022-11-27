// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate=59");
  res.status(200).json({ name: "John Doe" });
}
