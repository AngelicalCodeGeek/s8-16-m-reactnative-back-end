require("dotenv").config();

const RapidAPI_Key = process.env.RapidAPI_Key;


class ChatServices {
  static async messageChat(array) {
    const url = 'https://chatgpt53.p.rapidapi.com/';
    const array2 = array.map(item => {
      if (item.role) {
        return item
      }
      return { role: item.user._id === '1' ? 'user' : 'assistant', content: item.text }
    });
    const body = {
      messages: array2,
    }

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': RapidAPI_Key,
        'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
      },
      body: JSON.stringify(body)
    };

    try {
      const response = await fetch(url, options).catch(error => { console.log(error); });
      let result = await response.json();
      const result2 = result.choices[0].message.content;
      return {
        message: result2,
      }
      // return { message: 'Hello, hola' }
    } catch (error) {
      console.error(error);
    }
  }

  static createChat(users) {
    try {

    } catch (error) {
      return error;
    }
  }
};

module.exports = {
  ChatServices
}


//  react-native-dotenv

// const configuration = new Configuration({
//   apiKey: '',
//   organization: "org-LWZAZjlRTQcR6hiyjJeDOpib",
// });
// const openai = new OpenAIApi(configuration);

// const completion = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Hello world",
// });
// console.log(completion.data.choices[0].text);