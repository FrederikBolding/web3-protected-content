import { withSession } from "../../hooks/withSession";

export default withSession(async (req, res) => {
  const { signedMessage } = await req.body;

  const user = { signedMessage };
  req.session.set("user", user);
  await req.session.save();
  res.json(user);
});
