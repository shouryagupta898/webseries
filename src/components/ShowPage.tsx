import { FC, memo, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchShowsAction } from "../actions/saga";
import { loadingSelector, showsSelector } from "../selectors/show";
import { State } from "../store";
import ShowView from "./ShowView";

interface ownProps {}

type ShowPageProps = ReduxProps;

// interface ShowPageProps {
//   shows: Show[];
//   getShows: () => any;
//   loading: boolean;
// }

const ShowPage: FC<ShowPageProps> = ({ getShows, shows, loading }) => {
  const [query, setQuery] = useState();
  useEffect(() => {
    getShows();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <input
        className="border border-black rounded-md m-4 px-2 py-1"
        placeholder="search"
      />
      <div className="grid grid-cols-3 bg-yellow-300 max-w-5xl mx-auto my-4 p-4">
        {shows.map((i) => (
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
  };
};

// an object with prop names as keys and action creator as object
const mapDispatchToProps = {
  getShows: fetchShowsAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(memo(ShowPage));
