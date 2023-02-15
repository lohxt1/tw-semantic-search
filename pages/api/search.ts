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

  if (req.method === "POST") {
    // create todo
    const { query, userId } = req.body;

    const ip = getIP(req);

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        tweetLengthLimit: 1,
        count: 1000,
        excludeReplies: false,
      }),
    };

    var url = `${process.env.API_URL}/search`;

    const data = await fetch(url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log("error", error));

    let newSearch = {
      userId,
      query,
      ip,
    };

    if (Array.isArray(data)) {
      await prisma.searches.create({
        data: newSearch,
      });
      return res.status(200).json({
        data,
      });
    } else {
      res.status(400).send({
        message: "Invalid request",
      });
    }
  }
};
