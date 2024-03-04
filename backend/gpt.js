const OpenAI = require('openai').default;

const openai = new OpenAI({
    apiKey: 'OPENAI_API_KEY',
});

let prompts = ["Tell me about your greatest strength", "Tell me about a time where you overcame a significant challenge", "Tell me about your high school experience", "Why do you want to attend our university?"]

let stringPrompts = prompts.join('\n');

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant dedicated to helping students find college prompts that are similar and whose essays can be combined."},
        {"role": "user", "content": "I am going to provide you with a list of prompts. Help me find the five pairs of prompts that are the MOST similar. Just list the prompts themselves: " + stringPrompts}],
    model: "gpt-4-turbo-preview",
  });

  console.log(completion.choices[0].message.content);
}

module.exports = { main };

