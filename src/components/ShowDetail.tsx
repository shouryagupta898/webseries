import { FC, memo } from "react";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const ShowDetail: FC = () => {
  return (
    <div>
      <Link to="/">
        <KeyboardReturnIcon className="text-5xl text-blue-700" />
      </Link>
      <h1 className="text-red-500 text-4xl ">SHOW DETAIL IS HERE</h1>
    </div>
  );
};

export default memo(ShowDetail);
