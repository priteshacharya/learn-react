import React from "react";

const HtmlVsReactTags = () => {
  return (
    <div>
      <div
        id="product"
        data-product-id="123"
        data-category="electronics"
        data-price="49.99"
      ></div>
      <div
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        for class you could need to give className The next time you see{" "}
        {"{{ and }}"} in JSX, know that it’s nothing more than an object inside
        the JSX curlies!
      </div>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
    </div>
  );
};

export default HtmlVsReactTags;
