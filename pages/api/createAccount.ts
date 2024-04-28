import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/server/db";
import withHandler from "../../lib/server/withHandler";

async function createAccount(req: NextApiRequest, res: NextApiResponse) {
  let user;
  const { name, phone } = req.body;
  const reqData = { name, phone };
  user = await db.user.findUnique({
    where: {
      phone: reqData.phone,
    },
  });

  if (user) {
    return res.json({
      status: "exist",
      msg: "Already exists.",
    });
  } else {
    user = await db.user.create({
      data: {
        name,
        phone,
      },
    });

    return res.json({
      status: "create",
      msg: "Created!",
    });
  }
}

export default withHandler({
  methods: ["POST"],
  handler: createAccount,
  isPrivate: false,
});
