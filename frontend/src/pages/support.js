import React, { useEffect, useState } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js";
import Footer from "../components/Layouts/Footer.js";
import BannerV2 from "../components/Banner/BannerV2.js";
import Header from "../components/Header/Header.js";
import bg from "../assets/contact.jpg";
import ContactBody from "../components/Contact/ContactBody.js";
import GetInTouch from "../components/Contact/GetInTouch";
import DashboardEditor from "../components/admin/Dashboard/News/DashboardEditor";

function Support() {
  const [newsContent, setNewsContent] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const handleOnChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    console.log(inputValue);
    const formData = new FormData();

    // const imageArr = Array.from(file);
    // imageArr.forEach((image) => {
    //   formData.append("newImg", image);
    // });
    // formData.append("newTime", new Date());
    // formData.append("newCate", cateValue);
    // formData.append("newTitle", inputValue.title);
    // formData.append("newContent", newsContent);
    // axios.post("http://localhost:4000/news", formData, config).then(() => {
    //   props.setCloseCreateFunc(false);
    //   props.setToastFunc(true);
    // });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "unset";
  }, []);

  return (
    <div className="Contact">
      <Header />
      <BannerV2 bannerImage={bg} position={"0px"} />

      <form onSubmit={onSubmit} className="getintouch-form w-100">
        <label>Contact Us</label>
        <input placeholder="Name" name="name" onChange={handleOnChange}></input>
        <input
          placeholder="Email"
          name="email"
          onChange={handleOnChange}
        ></input>
        <input
          placeholder="Subject"
          name="subject"
          onChange={handleOnChange}
        ></input>
        <DashboardEditor setNewsContent={setNewsContent} />
        <button className="btn">Send message</button>
      </form>
      <Newsletter />
      <Footer />
    </div>
  );
}
export default Support;
