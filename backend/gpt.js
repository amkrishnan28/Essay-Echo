const OpenAI = require('openai').default;

const openai = new OpenAI({
    apiKey: 'OPEN AI KEY',
});

async function main(stringPrompts) {
    console.log(stringPrompts);
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant dedicated to helping students find college prompts that are similar and whose essays can be combined."},
        {"role": "user", "content": "I am going to provide you with a list of prompts. Help me find the five pairs of prompts that are the MOST similar. Just provide a list containing the similar pairs, NO OTHER TEXT: " + stringPrompts}],
    model: "gpt-4-turbo-preview",
  });

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}

module.exports = { main };

