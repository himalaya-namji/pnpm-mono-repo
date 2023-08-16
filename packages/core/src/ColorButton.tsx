import { ReactElement } from "react";
import { primary } from "@core/color"; // 일부러 절대경로 예시를 보여주기 위해 작성

export const ColorButton = (): ReactElement => {
  return <button style={{ backgroundColor: primary }}>Click Me</button>;
};
