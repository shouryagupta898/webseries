import { FC, memo, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { State } from "../store";
import {
  // castSelector,
  loadingSelector,
  searchMapSelector,
} from "../selectors/show";
import { Card, Rating } from "@mui/material";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { fetchCastAction, fetchDetailAction } from "../slices/Shows";
type OwnProps = {} & WithRouterProps;

type ShowDetailProps = ReduxProps & OwnProps;

const placeholderImg =
  "https://images.unsplash.com/photo-1669277928857-14dac7ce046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlaG9sZGVyJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

const ShowDetail: FC<ShowDetailProps> = ({
  params,
  show,
  loadDetail,
  loading,
  loadCast,
  // cast,
}) => {
  useEffect(() => {
    loadDetail(+params.id);
    loadCast(+params.id);
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
        <div className="flex justify-center ml-3 mt-2">
          <p className="max-w-xl ml-4 ">{show.summary}</p>
        </div>

        <Card className="ml-4 w-96 mt-2">
          <div className="flex flex-col   p-4 space-y-2 ">
            <h1 className="text-3xl font-serif font-bold">SHOW INFO</h1>
            <ul>
              <span className="text-red-600">Type: </span> {show.type}
            </ul>
            <ul>
              <span className="text-red-600">Language: </span> {show.language}
            </ul>
            <ul>
              <span className="text-red-600">Schedule: </span>{" "}
              {show.schedule.days[0] || "Saturday"} |{" "}
              {show.schedule.days[1] || "Sunday"} at{" "}
              {show.schedule.time || "10:00"} [{show.runtime || "45"}]
            </ul>
            <ul>
              <span className="text-red-600">Status: </span> {show.status}
            </ul>

            <div className="flex items-center justify-center">
              <Rating
                name="customized-10"
                size="small"
                defaultValue={show.rating.average || 4}
                precision={
                  0.1 || 0.2 || 0.3 || 0.4 || 0.5 || 0.6 || 0.7 || 0.8 || 0.9
                }
                max={10}
              />
              ( {show.rating.average || 4} )
            </div>
          </div>
        </Card>
      </div>
      <Card className="flex flex-col p-2 m-4 bg-gray-200 ">
        <h1 className="text-2xl font-serif font-bold self-center">CAST</h1>

        {/* <div className="grid grid-cols-6 p-4 bg-white">
          {cast.map((c) => (
            <div key={c.id}>
              <Card className="h-24 w-24 mt-2">
                <img
                  className="h-full w-full object-cover"
                  alt={c.name}
                  src={c.image?.medium}
                />
              </Card>
              <h2 className="text-xs">{c.name}</h2>
            </div>
          ))}
        </div> */}
      </Card>
    </Card>
  );
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return {
    show: searchMapSelector(state)[+ownProps.params.id],
    loading: loadingSelector(state),
    // cast: castSelector(state),
  };
};

// an object with prop names as keys and action creator as object
const mapDispatchToProps = {
  loadDetail: fetchDetailAction,
  loadCast: fetchCastAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(memo(ShowDetail)));
