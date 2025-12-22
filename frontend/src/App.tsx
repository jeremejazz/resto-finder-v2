import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search/search";

function App() {
  const hideBanner = import.meta.env.VITE_HIDE_BANNER;

  return (
    <>
      {hideBanner ? null : (
        <a
          className="github-fork-ribbon left-top"
          href="https://github.com/jeremejazz/resto-finder-v2"
          target="_blank"
          data-ribbon="Fork me on GitHub"
          title="Fork me on GitHub"
        >
          Fork me on GitHub
        </a>
      )}
      <Box>
        <Header />
        <Search />
      </Box>
    </>
  );
}

export default App;
