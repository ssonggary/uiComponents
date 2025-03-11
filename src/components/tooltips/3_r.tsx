import data from "./data";
import cx from "./cx";
import { useEffect } from "react";

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  // useEffect(() => {
  //   const close = () => toggle(null);
  //   if (isOpen) {
  //     window.addEventListener("click", close, { once: true });
  //   }
  //   return () => {
  //     window.removeEventListener("click", close);
  //   };
  // }, [isOpen, toggle]);

  return (
    <details className={cx("details")} data-tooltip={id}>
      <summary className={cx("summary")} data-tooltip-summary>
        {title}
      </summary>
      <div className={cx("tooltip")} onClick={(e) => e.stopPropagation()}>
        {description}
      </div>
    </details>
  );
};

const Tooltip3 = () => {
  useEffect(() => {
    const closeAllTooltip = (e: Event) => {
      const target = e.target as HTMLElement;

      document.querySelectorAll("[data-tooltip]").forEach((elem) => {
        if (elem !== target.parentElement) {
          elem.removeAttribute("open");
        }
      });
    };
    window.addEventListener("click", closeAllTooltip);
    return () => {
      window.removeEventListener("click", closeAllTooltip);
    };
  }, []);

  return (
    <>
      <h3>
        #1. React <sub>html details 태그 사용</sub>
      </h3>
      {data.map((d) => (
        <Tooltip {...d} key={d.id} />
      ))}
    </>
  );
};

export default Tooltip3;
