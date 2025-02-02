import { NextApiRequest, NextApiResponse } from "next";
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleLogin(req, res, {
        returnTo: "/",
      });
    } catch (error: any) {
      console.error("Error during login:", error);
      res.status(error.status || 500).end(error.message);
    }
  },
});
