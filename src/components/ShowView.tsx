import { Button, Card, Rating } from "@mui/material";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Show } from "../models/Show";

interface ShowViewProps {
  shows: Show;
}

const placeholderImg =
  "https://images.unsplash.com/photo-1669277928857-14dac7ce046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlaG9sZGVyJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

const ShowView: FC<ShowViewProps> = ({ shows }) => {
  return (
    <Card
      variant="outlined"
      className="flex flex-col items-center border border-black bg-gray-200 m-4 w-64"
    >
      <div className="h-60 w-60 mt-2">
        <img
          className="h-full w-full object-cover"
          src={shows.image?.medium || placeholderImg}
        />
      </div>
      <div className="flex flex-col items-center justify-center py-2 space-y-2">
        <ul>
          <span className="text-red-600">Name: </span> {shows.name}
        </ul>
        <ul>
          <span className="text-red-600">Language: </span> {shows.language}
        </ul>
        <Rating
          name="customized-10"
          size="small"
          defaultValue={shows.rating.average || 4}
          precision={0.5}
          max={10}
        />
        <Link to={"/view/" + shows.id}>
          <Button variant="contained" className="bg-blue-500 hover:bg-red-600">
            Booking
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default memo(ShowView);
