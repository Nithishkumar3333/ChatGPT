// const { Configuration, OpenAIApi } = require("openai");

// const API_KEY="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"

// const configuration = new Configuration({apikey: API_KEY});

// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message) {
//   const res = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: message,
//     temperature: 0.9,
//   max_token: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
//   });
//   return res.data.choices[0].text;
// }

// New
const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
});
export async function sendMsgToOpenAI(message) {
    const res = await openai.chat.completions.create({
        model: "text-davinci-003",
        prompt: {
            text: "essay on messi",  // The actual message content
            messages: [
                {
                    role: "user",
                    content: message
                }
            ]
        },
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return res.data.choices[0].text;
}


// export async function sendMsgToOpenAI() {

// const chatCompletion = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   message: [{ "role": "user", prompt: "message" }],
//   temperature: 0.7,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
//   max_tokens: 30

// });
// console.log(chatCompletion.choices[0].text)
// }

