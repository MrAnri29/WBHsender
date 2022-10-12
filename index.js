import fetch from "node-fetch";
import { WebhookClient } from "discord.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
console.log(
  "\n █████  ███    ██ ██████  ██ ██   ██  ██████  ███████     ██     ██ ██████  ██   ██     ███████ ███████ ███    ██ ██████  ███████ ██████  \n██   ██ ████   ██ ██   ██ ██ ██  ██  ██    ██ ██          ██     ██ ██   ██ ██   ██     ██      ██      ████   ██ ██   ██ ██      ██   ██ \n███████ ██ ██  ██ ██████  ██ █████   ██    ██ ███████     ██  █  ██ ██████  ███████     ███████ █████   ██ ██  ██ ██   ██ █████   ██████  \n██   ██ ██  ██ ██ ██   ██ ██ ██  ██  ██    ██      ██     ██ ███ ██ ██   ██ ██   ██          ██ ██      ██  ██ ██ ██   ██ ██      ██   ██ \n██   ██ ██   ████ ██   ██ ██ ██   ██  ██████  ███████      ███ ███  ██████  ██   ██     ███████ ███████ ██   ████ ██████  ███████ ██   ██ \n                                                                                                                                          \n                                                                                                                                          \n"
);
rl.question("[+] webhookURL: ", function (webhookURL) {
    if (!webhookURL.startsWith("https://")) {
        return console.log("Please provide a valid webhook URL");
    }
    rl.question("[+] webhookContent: ", function (webhookContent) {
        rl.question("[+] AvatarURL: ", function (webhookAvatar) {
            rl.question("[+] Name: ", async function (webhookName) {
                const webhook = new WebhookClient({ url: webhookURL });
                webhook
                    .send({
                        content: webhookContent,
                        avatarURL: webhookAvatar,
                        username: webhookName,
                    })
                    .catch(console.log)
                    .then(console.log("sent!"));
            });
        });
    });
});