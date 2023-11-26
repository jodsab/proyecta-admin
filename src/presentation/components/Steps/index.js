import React from "react";
import { Divider, Steps } from "antd";
const PSteps = ({ stepItems, current, onChange }) => {
  return (
    <div>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={stepItems}
      />
    </div>
  );
};
export default PSteps;
