import { FC, memo, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  fetchCastAction,
  fetchQueryAction,
  fetchShowsAction,
} from "../actions/saga";
import {
  loadingSelector,
  searchSelector,
  showsQuerySelector,
  showsSelector,
} from "../selectors/show";
import { State } from "../store";
import ShowView from "./ShowView";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import SearchIcon from "@mui/icons-material/Search";
interface ownProps {}

type ShowPageProps = ReduxProps;

const ShowPage: FC<ShowPageProps> = ({
  getShows,
  loading,
  shows,
  getQuerySearch,
  query,
  searchShow,
}) => {
  useEffect(() => {
    getShows();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex h-screen  items-center justify-center ">
  //       <RotateRightIcon className="text-5xl text-red-500 animate-spin" />
  //     </div>
  //   );
  // }
  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex items-center justify-center border-2 border-black rounded-md m-4 ">
          <input
            placeholder="search"
            className="w-full px-2 py-1"
            value={query}
            onChange={(e) => getQuerySearch(e.target.value)}
          />
          <SearchIcon className="-ml-6" />
        </div>
        {loading && (
          <RotateRightIcon className="text-2xl text-red-500 animate-spin" />
        )}
      </div>
      {/* <div className="grid grid-cols-3 bg-yellow-300 max-w-5xl mx-auto my-4 p-4">
        {shows.map((i) => (
          <div key={i.id}>
            <ShowView shows={i} />
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-3 bg-yellow-300 max-w-5xl mx-auto my-4 p-4 h-screen overflow-scroll">
        {searchShow.map((i) => (
          <div key={i.id}>
            <ShowView shows={i} />
          </div>
        ))}
      </div>
    </>
  );
};

// return object with prop names as keys and data from redux store as value
const mapStateToProps = (state: State, ownProps: Partial<ownProps>) => {
  return {
    shows: showsSelector(state),
    loading: loadingSelector(state),
    query: showsQuerySelector(state),
    searchShow: searchSelector(state),
  };
};

// an object with prop names as keys and action creator as object
const mapDispatchToProps = {
  getShows: fetchShowsAction,
  getQuerySearch: fetchQueryAction,
  getCast: fetchCastAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(memo(ShowPage));
