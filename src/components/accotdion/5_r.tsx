import { useState } from "react";
import cx from "./cx";
import data from "./data";

const AccordionItem = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  return (
    <li className={cx("item", "item5")} key={id}>
      <input className={cx("input")} type="radio" name="accordion" id={id} />
      <label htmlFor="id" className={cx("tab")}></label>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const Accordions5 = () => {
  return (
    <>
      <h3>
        #5. React <sub>css animation (transition)</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d) => (
          <AccordionItem {...d} key={d.id} />
        ))}
      </ul>
    </>
  );
};

export default Accordions5;
