import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";
import ShowPage from "./components/ShowPage";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route index element={<ShowPage />} />
        <Route path="/view/:id" element={<ShowDetail />} />
      </Routes>
    </div>
  );
};

export default App;
