import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search/search";
import GHBanner from "./components/ui/gh-banner";

function App() {
  const hideBanner = import.meta.env.VITE_HIDE_BANNER;

  return (
    <>
      <GHBanner position="left-bottom" fixed={true} hideBanner={hideBanner} />
      <Box>
        <Header />
        <Search />
      </Box>
    </>
  );
}

export default App;
