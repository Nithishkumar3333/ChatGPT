import React, { useRef, useState } from "react";
import "./imageGenerator.css";
import flower from "./assets/colorful-beautiful-flowers-background-blossom-floral-bouquet-decoration-garden-flowers-plant-vertical-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-10.avif";
import { useNavigate } from "react-router-dom";

const ImageGenerator = () => {
  const navigate = useNavigate();
  const [image_url, setimage_url] = useState("/");
  let inputRef = useRef(null);

  const navigateToScreen = async () => {
    // console.log("hi");
    navigate("/Home");
  };

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "1024x1024",
        }),
      }
    );
    let data = await response.json();
    // console.log(data)
    let data_array = data.data;
    setimage_url(data_array[0].url);
  };
  return (
    <div className="ai-image-generator">
      <div className="header">
        Ai image <span>generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={image_url === "/" ? flower : image_url} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe What You Want To See"
        />
        <div
          className="generate-btn"
          onClick={() => {
            imageGenerator();
          }}
        >
          Generate
        </div>
      </div>
      <button className="Chatgpt" onClick={navigateToScreen}>
        ChatGPT
      </button>
    </div>
  );
};

export default ImageGenerator;
