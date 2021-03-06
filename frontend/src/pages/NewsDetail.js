import React, { useEffect, useState } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js";
import Footer from "../components/Layouts/Footer.js";
import Header from "../components/Header/Header";
import HeaderV2 from "../components/Header/HeaderV2";
import axios from "axios";
import NewsContent from "../components/News/NewsContent";

export default function ProductDetail(props) {
  const [news, setNews] = useState();

  useEffect(() => {
    axios
      .get(
        `http://be-ecommerce-year4.herokuapp.com/news/` + props.match.params.id
      )
      .then((res) => {
        setNews(res.data);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "unset";
  }, []);

  return (
    <div className="ProductDetail">
      <Header />
      <NewsContent news={news} />
      <Newsletter />
      <Footer />
    </div>
  );
}
