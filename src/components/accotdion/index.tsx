import cx from "./cx";
import Accordions1 from "./1_r";
import Accordions2 from "./2_r";
import Accordions3 from "./3_r";
import Accordions5 from "./5_r";
import Accordions4V from "./4_v";

const Accordions = () => {
  return (
    <div className={cx("Accordions")}>
      <h2>아코디언</h2>
      <Accordions1 />
      <Accordions2 />
      <Accordions3 />
      <Accordions4V />
      <Accordions5 />
    </div>
  );
};

export default Accordions;
