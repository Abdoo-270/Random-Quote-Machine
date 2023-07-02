import { FaTwitter } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoaidng] = useState(true);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIsLoaidng(true);
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        // Handle successful response
        setQuotes(response.data);
        setIsLoaidng(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
        setIsLoaidng(false);
      });
  }, []);
  if (isLoading) {
    return <h1>loading... </h1>;
  }
  const getNewQoute = () => {
    const randomNumber = Math.floor(Math.random() * 1641);
    setIndex(randomNumber);
  };
  const { text, author } = quotes[index];
  return (
    <div id="quote-box">
      <p id="text">{text}</p>
      <h4 id="author">" {author} "</h4>
      <div className="buttons">
        <button>
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </button>
        <button id="new-quote" onClick={() => getNewQoute()}>
          new quote
        </button>
      </div>
    </div>
  );
};
export default Home;
