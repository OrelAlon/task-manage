import GlobalStyles from "./components/styles/Global";
import { Wrapper } from "./components/styles/Wrapper.styled";
import { ActionIcon } from "@mantine/core";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";

import { BsSun, BsMoon } from "react-icons/bs";

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Wrapper>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <header>
              {" "}
              <ActionIcon
                variant='outline'
                color={colorScheme === "dark" ? "yellow" : "blue"}
                onClick={() => toggleColorScheme()}
                title='Toggle color scheme'
              >
                {colorScheme === "dark" ? (
                  <BsSun color={"white"} />
                ) : (
                  <BsMoon color={"black"} />
                )}
              </ActionIcon>
            </header>

            <GlobalStyles />

            <AddTask />
            <TaskList />
          </MantineProvider>
        </ColorSchemeProvider>
      </Wrapper>
    </>
  );
}

export default App;
