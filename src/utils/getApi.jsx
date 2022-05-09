export default class GetData {
  async getQuote() {
    try {
      const response = await fetch(
        "https://geek-quote-api.herokuapp.com/v1/quote"
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
