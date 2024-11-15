import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Timeline.css";

const TimelineArrow: React.FC = () => {
  const points = [
    { year: 2016, description: "Project A" },
    { year: 2017, description: "Project B" },
    { year: 2018, description: "Project C" },
    { year: 2019, description: "Project D" },
    { year: 2020, description: "Project E" },
    { year: 2021, description: "Project F" },
    { year: 2022, description: "Project G" },
    { year: 2023, description: "Project H" },
    { year: 2024, description: "Project I" },
  ];

  return (
    <div className="timeline-container">
      <div className="arrow-background">
        {/* 화살표 아이콘 */}
        <FontAwesomeIcon icon={faArrowRight} size="3x" className="arrow-icon" />
        {/* 각 년도에 맞는 이력 내용 */}
        {points.map((point, index) => (
          <div
            key={point.year}
            className="point-container"
            style={{
              left: `${(index / (points.length - 1)) * 100}%`, // 화살표의 위치에 맞춰 배치
            }}
          >
            <div className="point"></div>
            <div className="point-text">
              <span>{point.year}</span>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineArrow;
