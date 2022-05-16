import React, { Suspense, useState } from 'react';
import './App.css';
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material';
import Navbar from './components/navbar/Navbar'
import Homepage from './pages/Homepage';
import Viewnftpage from './pages/Viewnftpage';
import Viewcollectionpage from './pages/Viewcollectionpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ExploreCollectionsPage from "./pages/ExploreCollectionsPage";
import ScrollToTop from './components/scrolltop/ScrollToTop';
import CreateNFT from './pages/CreateNFT';
import DummyApi from './pages/DummyApi';
import UserProfile from './pages/UserProfile';
import { WalletContext } from './contexts/WalletContext';
import Settings from './pages/Settings';

function App() {
  const [userprofile, setUserprofile] = useState({});

  return (
    <WalletContext.Provider value={[userprofile, setUserprofile]}>
      <div className="App">


        <BrowserRouter basename={process.env.PUBLIC_URL}>

          <ScrollToTop />
          <ThemeProvider theme={theme}>
            <Suspense fallback="loading">
              <Navbar />
            </Suspense>
          </ThemeProvider>

          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/view-nft" element={<Viewnftpage />}></Route>
            <Route
              path="/view-collection"
              element={<Viewcollectionpage />}
            ></Route>
            <Route
              path="/explore-collection"
              element={<ExploreCollectionsPage />}
            ></Route>
            <Route
              path="/create-nft"
              element={<CreateNFT />}
            ></Route>
            <Route
              path="/dummy-api"
              element={<DummyApi />}
            ></Route>
            <Route
              path="/user"
              element={<UserProfile />}
            ></Route>
            <Route
              path="/user/settings"
              element={<Settings />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>




      </div>
    </WalletContext.Provider>
  );
}

export default App;
