import { useEffect, useState } from "react";
import data from "../data/data.json";
import { Card } from "./Card";
import "./Table.css";

interface Props {
  order: string;
}
export const Table = ({ order }: Props) => {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    console.log("[useEffect] order", order, data);
    // const sortedData = list.length > 0 ? list : [...data];
    let sortedData = [...data];
    if (order === "1") {
      //최신순
      sortedData = sortedData.sort((a, b) => {
        if (a.bookmark && !b.bookmark) return -1;
        else if (!a.bookmark && b.bookmark) return 1;
        return (
          Number(b.date.split("-").join("")) -
          Number(a.date.split("-").join(""))
        );
      });
      setList(sortedData);
    } else {
      //조회순
      sortedData = sortedData.sort((a, b) => {
        if (a.bookmark && !b.bookmark) return -1;
        else if (!a.bookmark && b.bookmark) return 1;
        return Number(b.views) - Number(a.views);
      });
      setList(sortedData);
    }
  }, [order]);
  const handleClick = (idx: number) => {
    const updateList = list.map((v: any, i: number) => {
      if (i === idx) {
        v.bookmark = !v.bookmark;
        return v;
      } else {
        return v;
      }
    });

    const itemToMove = updateList[idx];
    const newList = updateList.filter((_: any, i: any) => i !== idx);
    setList([itemToMove, ...newList]);
  };
  return (
    <>
      <div className="table_main">
        {list.map((value: any, index: number) => (
          <Card
            idx={index}
            key={index}
            date={value.date}
            views={value.views}
            bookmark={value.bookmark}
            handleClick={handleClick}
          ></Card>
        ))}
      </div>
    </>
  );
};
