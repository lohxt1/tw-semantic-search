import type { NextApiRequest, NextApiResponse } from "next";
import applyRateLimit, { getIP } from "@/lib/middleware/ratelimit";
import prisma from "@/lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //   const session = await unstable_getServerSession(req, res, authOptions);

  //   if (!session) {
  //     // res.send({ content: "This is protected content. You can access this content because you are signed in.", })
  //     res.status(400).send({
  //       message:
  //         "This is protected content. You can access this content because you are signed in.",
  //     });
  //   }

  await applyRateLimit(req, res);

  const { userId } = req.query;

  let data;

  if (typeof userId == "string") {
    data = await prisma.searches.findMany({
      where: {
        userId,
      },
    });
  }

  return res.status(200).json(data);
};
