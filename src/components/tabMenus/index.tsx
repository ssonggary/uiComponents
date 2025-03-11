import cx from "./cx";
import TabMenu1 from "./1_r";
import TabMenu2 from "./2_r";
import TabMenu3 from "./3_r";
import TabMenu4V from "./4_v";

const TabMenus = () => {
  return (
    <div className={cx("TabMenus")}>
      <h2>탭메뉴</h2>
      <TabMenu1 />
      <TabMenu2 />
      <TabMenu3 />
      <TabMenu4V />
    </div>
  );
};

export default TabMenus;
