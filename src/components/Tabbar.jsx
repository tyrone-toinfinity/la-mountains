import { useState } from "react";
import "./Tabbar.css";
import tabImg1 from "../assets/tab-image1.jpg";
import tabImg2 from "../assets/tab-image2.jpg";

const Tab1Component = () => {
  return (
    <div className="img__wrapper">
      <img
        loading="lazy"
        src={tabImg1}
        alt="Tab 1"
        width={2400}
        height={1600}
        className="tab__img"
      />
      <div className="overlay">
        <h3>Schedule</h3>
        <ul>
          <ul className="overlay__list">
            <li>
              <span>25 Nov 2016</span>Vestibulum viverra
            </li>
            <li>
              <span>28 Nov 2016</span>Vestibulum viverra
            </li>
            <br />
            <br />
            <li>
              <span>18 Dec 2016</span>Vestibulum viverra
            </li>
            <br />
            <br />
            <li>
              <span>7 Jan 2017</span>Vestibulum viverra
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

const Tab2Component = () => {
  return (
    <div className="img__wrapper">
      <img
        loading="lazy"
        src={tabImg2}
        alt="Tab 1"
        width={2400}
        height={1600}
        className="tab__img"
      />
      <div className="overlay">
        <h3>Schedule</h3>
        <ul>
          <ul className="overlay__list">
            <li>
              <span>17 Nov 2016</span>Vestibulum viverra
            </li>
            <br />
            <li>
              <span>13 Dec 2016</span>Vestibulum viverra
            </li>
            <li>
              <span>28 Dec 2016</span>Vestibulum viverra
            </li>
            <li>
              <br />
              <span>7 Feb 2017</span>Vestibulum viverra
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export const Tabbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tab-bar tabBar__container">
      <div className="tab__container--margin">
        <button
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Mountain 1
        </button>
        <button
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Mountain 2
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <Tab1Component />}
        {activeTab === 1 && <Tab2Component />}
      </div>
    </div>
  );
};
