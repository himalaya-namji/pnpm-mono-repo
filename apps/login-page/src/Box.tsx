import React, { useEffect, useRef } from "react";

const BoxRenderer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxSize = 2; // 각 박스 크기: 2픽셀
  const boxCount = 10000; // 렌더링할 총 박스 개수

  // 박스를 canvas에 그리는 함수
  const drawBoxes = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < boxCount; i++) {
      const x = (i % 100) * boxSize; // X 좌표
      const y = Math.floor(i / 100) * boxSize; // Y 좌표
      ctx.fillStyle = `hsl(${i % 360}, 80%, 60%)`; // 색상 설정
      ctx.fillRect(x, y, boxSize, boxSize); // 2픽셀 박스 그리기
    }
  };

  // 컴포넌트 마운트 시 canvas 초기화 및 박스 렌더링
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas 크기를 설정하고 박스 렌더링
    canvas.width = 200; // 2픽셀 * 100칸
    canvas.height = 200; // 2픽셀 * 100칸
    drawBoxes(ctx);
  }, []);

  return <canvas ref={canvasRef} style={{ border: "1px solid black" }} />;
};

export default BoxRenderer;
