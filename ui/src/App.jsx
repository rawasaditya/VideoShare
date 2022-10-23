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

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Container>
<BrowserRouter>
<Menu setTheme={setTheme} theme={theme} />
        <Main>
          <NavBar />
          <Wrapper>
            <Routes path="/">
              <Route index element={<Home />} />
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
