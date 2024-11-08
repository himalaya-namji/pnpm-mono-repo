import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const VirtualizedList = () => {
  const parentRef = React.useRef(null);

  // 10,000개의 아이템을 가상화된 리스트로 렌더링
  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35, // 각 아이템 높이 35px
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: `400px`,
        width: `300px`,
        overflow: "auto",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${virtualRow.start}px)`,
              height: `${virtualRow.size}px`, // 각 아이템의 높이 설정
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1px solid #ccc",
            }}
          >
            Row {virtualRow.index}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;
