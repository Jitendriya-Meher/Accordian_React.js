
import { useState } from "react";
import FAQ from "../api/faq.json";
import { useEffect } from "react";
import Faq from "./Faq";

const Accordion = () => {

  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  const handleToggle = (id) => {

    setActiveId((prevId) => (prevId === id ? false : id));

  };

  useEffect(() => {
    setData(FAQ);
  },[]);

  return (
    <>

      <h1>
        The Accordian
      </h1>

      <ul className="section-accordion">
        {
          data.map((item) => (
            <Faq key={item.id} 
            item={item}
            isActive={activeId === item.id}
            onToggle={ ()=> {
              handleToggle(item.id);
            }}
            ></Faq>
          ))
        }
      </ul>

    </>
  )
}

export default Accordion