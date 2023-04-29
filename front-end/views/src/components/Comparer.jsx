import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Row, Col } from "react-bootstrap";

function Comparer() {
  const bank1Conditions = [
    { name: "Condition1", progress: 1 },
    { name: "Condition2", progress: 50 },
    { name: "Condition3", progress: 80 },
    { name: "Condition4", progress: 40 },
    { name: "Condition5", progress: 10 },
    { name: "Condition6", progress: 30 },
    { name: "Condition7", progress: 40 },
    { name: "Condition8", progress: 45 },
    { name: "Condition9", progress: 49 },
    { name: "Condition10", progress: 50 },
    { name: "Condition11", progress: 99 },
    { name: "Condition12", progress: 99.5 }, 
  ];

  const bank2Conditions = [
    { name: "Condition1", progress: 60 },
    { name: "Condition2", progress: 40 },
    { name: "Condition3", progress: 70 },
    { name: "Condition4", progress: 40 },
    { name: "Condition5", progress: 4 },
    { name: "Condition6", progress: 19 },
    { name: "Condition7", progress: 20 },
    { name: "Condition8", progress: 90 },
    { name: "Condition9", progress: 49 },
    { name: "Condition10", progress: 44 },
    { name: "Condition11", progress: 56 },
    { name: "Condition12", progress: 99.5 },
  ];

  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      {bank1Conditions.map((condition, index) => {
        const bank2Condition = bank2Conditions[index];
        let bank1Color = "danger";
        let bank2Color = "danger";
        const num = bank1Conditions.length - bank2Conditions.length;
        let list_con = condition.name;
        const progressDiff = bank2Condition.progress - condition.progress;
        if (num < 0) {
          list_con = bank2Condition.name;
        }
        if (progressDiff === 0) {
          bank1Color = "info";
          bank2Color = "info";
        } else if (progressDiff > 0) {
          bank2Color = "danger";
          bank1Color = "success";
        } else {
          bank2Color = "success";
          bank1Color = "danger";
        }

        return (
          <div className="d-flex" key={index}>
            <ProgressBar
              className="w-50 mb-3  justify-content-end "
              style={{ height: "40px" }}
              variant={bank1Color}
              now={condition.progress}
              label={`Bank 1: ${condition.progress}Dz`}
            />
            <div className="mx-3 mb-3 text-center">
              <span>{list_con}</span>
            </div>
            <ProgressBar
              className="w-50 mb-3 "
              variant={bank2Color}
              style={{ height: "40px" }}
              now={bank2Condition.progress}
              label={`Bank 2: ${bank2Condition.progress}Dz`}
          
            />
          </div>
        );
      })}
    </div>
  );
}

export default Comparer;
