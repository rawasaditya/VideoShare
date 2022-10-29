import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Menu from "./Components/Menu/Menu";
import NavBar from "./Components/NavBar/NavBar";
import { Container, Wrapper, Main } from "./styled";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Video from "./Components/Pages/Video/Video";
import Signin from "./Components/Pages/Signin/Signin";
import axios from "axios";
function App() {
  axios.defaults.baseURL = `http://localhost:8800/api/v1/`;
  axios.defaults.withCredentials = true;

  const [theme, setTheme] = useState(true);
  const [videos, setvideos] = useState([]);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setTheme={setTheme} theme={theme} />
          <Main>
            <NavBar videos={videos} setvideos={setvideos} />
            <Wrapper>
              <Routes path="/">
                <Route
                  index
                  element={
                    <Home type="random" videos={videos} setvideos={setvideos} />
                  }
                />
                <Route
                  path="/explore"
                  element={
                    <Home type="trends" videos={videos} setvideos={setvideos} />
                  }
                />
                <Route
                  path="/subscription"
                  element={
                    <Home
                      type="subscribed"
                      videos={videos}
                      setvideos={setvideos}
                    />
                  }
                />

                <Route
                  path="/liked"
                  element={
                    <Home type="liked" videos={videos} setvideos={setvideos} />
                  }
                />

                <Route path="signin" element={<Signin />} />
                <Route path="video">
                  <Route path=":id" element={<Video />}></Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
