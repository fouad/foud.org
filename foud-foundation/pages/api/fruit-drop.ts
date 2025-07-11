import type { NextApiRequest, NextApiResponse } from "next";

interface FruitDropRequestBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  accountNumber?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message?: string; error?: string }>
) {
  console.log(`[API] ${new Date().toISOString()} - ${req.method} ${req.url}`);

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, accountNumber } =
    req.body as FruitDropRequestBody;

  if (!firstName || !lastName || !email || !accountNumber) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log(
    `Fruit Drop Submission -> Name: ${firstName} ${lastName}, Email: ${email}, Account #: ${accountNumber}`
  );

  return res
    .status(200)
    .json({ message: "Your fruit drop request has been received." });
}
