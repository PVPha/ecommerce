import React from "react";
import "../../App.css";
import DropdownSlider from "./DropdownSlider.js";
import { withRouter } from "react-router-dom";
import PhoneImg from "../../assets/phone-dropdown.jpg";
import PhoneImg2 from "../../assets/phone-dropdown2.jpg";
import PhoneImg3 from "../../assets/phone-dropdown3.jpg";
import accessoriesImg from "../../assets/accessories-dropdown.jpg";
import accessoriesImg2 from "../../assets/accessories-dropdown2.jpg";
import accessoriesImg3 from "../../assets/accessories-dropdown3.jpg";
function Dropdown(props) {
  const arrImgPhone = [];
  const redirect = (event) => {
    window.scrollTo(0, 0);
    props.history.push(`/${event.target.id}`);
    props.handleLeaveHover();
  };

  const type = props.label.toLowerCase();

  return (
    <div className="Dropdown">
      <div className="dropdown-container flex flex-col">
        {props.dropdownContent.map((item, index) => {
          return (
            <div className="dropdown-col flex" key={index}>
              <div>
                {item.dropdownTitle && (
                  <div
                    id={`${type}/${item.dropdownTitle.replace(/\s+/g, "")}`}
                    onClick={redirect}
                    className="dropdown-title"
                  >
                    {item.dropdownTitle}
                  </div>
                )}
                <div className="dropdown-item flex-col ml-5">
                  {item.dropdownList.map((item, index) => {
                    return (
                      <div
                        id={`${type}/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={redirect}
                        key={index}
                        style={{
                          textTransform: "capitalize",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        {/* {props.label.toLowerCase() === "phone" && (
          <DropdownSlider
            width={"450"}
            height={"300"}
            imgs={[PhoneImg, PhoneImg2, PhoneImg3]}
          ></DropdownSlider>
        )} */}
      </div>
    </div>
  );
}

export default withRouter(Dropdown);
