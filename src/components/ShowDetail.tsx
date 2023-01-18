import { FC, memo, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { State } from "../store";
import { loadingSelector, searchMapSelector } from "../selectors/show";
import { Card, Rating } from "@mui/material";
import { fetchDetailAction } from "../actions/saga";
import RotateRightIcon from "@mui/icons-material/RotateRight";
type OwnProps = {} & WithRouterProps;

type ShowDetailProps = ReduxProps & OwnProps;

const placeholderImg =
  "https://images.unsplash.com/photo-1669277928857-14dac7ce046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlaG9sZGVyJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

const ShowDetail: FC<ShowDetailProps> = ({
  params,
  show,
  loadDetail,
  loading,
}) => {
  console.log("params", params.id);
  console.log(show);

  useEffect(() => {
    loadDetail(+params.id);
  }, [params.id]);

  if (!show) {
    return (
      <div className="flex h-screen  items-center justify-center ">
        <RotateRightIcon className="text-5xl text-red-500 animate-spin" />
      </div>
    );
  }
  return (
    <Card className="p-4 my-4 max-w-6xl mx-auto ">
      <div>
        <Link to="/" className="flex">
          <KeyboardReturnIcon className="text-xl text-blue-700" />
          <h3 className="text-xs">Back</h3>
        </Link>
      </div>
      <div className="flex items-center ">
        <h1 className="text-3xl font-serif">{show.name}</h1>
        {loading && (
          <RotateRightIcon className="text-5xl text-red-500 animate-spin" />
        )}
      </div>

      <div className="flex space-x-3 py-1 bg-gray-300 pl-2">
        {show.genres.map((g) => (
          <div key={g}>{g}</div>
        ))}
      </div>

      <div className="flex justify-between">
        <Card className="h-60 w-60 mt-2">
          <img
            className="h-full w-full object-cover"
            src={show.image?.medium || placeholderImg}
          />
        </Card>
        <div className="flex justify-center ml-3">
          <p className="max-w-xl ml-4 ">{show.summary}</p>
        </div>

        <Card className="ml-4 w-96">
          <div className="flex flex-col items-center justify-center py-2 space-y-2 ">
            <h1 className="text-3xl font-serif font-bold">SHOW INFO</h1>
            <ul>
              <span className="text-red-600">Type: </span> {show.type}
            </ul>
            <ul>
              <span className="text-red-600">Language: </span> {show.language}
            </ul>
            <ul>
              <span className="text-red-600">Schedule: </span>{" "}
              {show.schedule.days} at {show.schedule.time} [{show.runtime}]
            </ul>
            <ul>
              <span className="text-red-600">Status: </span> {show.status}
            </ul>

            <div className="flex items-center justify-center">
              <Rating
                name="customized-10"
                size="small"
                defaultValue={show.rating.average || 4}
                precision={0.5}
                max={10}
              />
              ( {show.rating.average || 4} )
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  console.log("ownProps", ownProps.params.id);
  return {
    show: searchMapSelector(state)[+ownProps.params.id],
    loading: loadingSelector(state),
  };
};

// an object with prop names as keys and action creator as object
const mapDispatchToProps = {
  loadDetail: fetchDetailAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(memo(ShowDetail)));
