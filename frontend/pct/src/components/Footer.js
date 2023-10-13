import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <div className="container">
        <p>How Do Price Comparator Sites Work?</p>
        <p>
        Price Comparator sites work by dynamically fetching updated prices, features, reviews, descriptions, and all essential information on various products from different e-commerce sites. All this data is then tailored in a structured manner for your easy understanding. So, when you are searching for a product, the price comparison site fetches prices and gives you results using which you can make the best purchase. Many of these price comparison sites allow browser notifications, and many even let you set alerts for price drops.
        </p>
        <br/>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
