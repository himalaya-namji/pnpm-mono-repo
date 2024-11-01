import "./Card.css";

interface Props {
  idx: number;
  date: string;
  views: number;
  bookmark: boolean;
  handleClick: (idx: number) => void;
}
export const Card = ({ idx, date, views, bookmark, handleClick }: Props) => {
  return (
    <div className="card_main">
      <div className="card_header">
        <span>{date}</span>
        <div
          className={`bookmark ${bookmark && "bookmarked"}`}
          onClick={() => handleClick(idx)}
        />
      </div>

      <span>{views} views</span>
    </div>
  );
};
