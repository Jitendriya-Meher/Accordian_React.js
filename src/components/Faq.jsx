// import { useState } from "react";

/* eslint-disable react/prop-types */
const Faq = ({ item , onToggle, isActive}) => {

    // const [activeId, setActiveId] = useState(false);

    // const handleClick = () => {
    //     setActiveId(!activeId);
    // }

  return (
    <li>
      <div className="accordion-grid">
        <p>{item.question}</p>

        <button
        className={isActive ? "active-btn":""}
        onClick={onToggle}
        >
            {
                isActive ? "Close" : "Show"
            }
        </button>
      </div>

      <p>{ isActive && item.answer}</p>
    </li>
  );
};

export default Faq;
