const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.command("/summarize", async ({ command, ack, say }) => {
  try {
    await ack();
    say("It will be best chat summary!");
  } catch (error) {
      console.log("err")
    console.error(error);
  }
});

(async () => {
  await app.start(process.env.APP_PORT);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();