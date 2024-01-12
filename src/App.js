import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { LightTheme, BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Block } from "baseui/block";
import { Avatar } from "baseui/avatar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import BlogPostDirectory from "./BlogPostDirectory";
import AboutMe from "./AboutMe";
import ArtGallery from "./ArtGallery";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <Block display="flex" flexDirection="row" minHeight="100vh">
            <Block
              width="25%"
              backgroundColor="#f0f0f0"
              padding="40px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Block width="75%">
                <Avatar
                  name="Tyler French"
                  size="scale3200"
                  src="https://avatars.githubusercontent.com/u/66684063?v=4"
                  overrides={{
                    Avatar: {
                      style: {
                        marginBottom: "20px",
                        width: "100%",
                        height: "auto",
                      },
                    },
                  }}
                />
              </Block>
              <Block marginTop="20px" textAlign="center">
                <h1>Tyler French</h1>
                <Block marginTop="20px">
                  <Link to="/about">About</Link>
                </Block>
                <Block marginTop="20px">
                  <Link to="/art">Art</Link>
                </Block>
                <Block marginTop="20px">
                  <a
                    href="https://github.com/your-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      style={{
                        fontSize: "48px",
                        color: "#24292e",
                        marginRight: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      style={{
                        fontSize: "48px",
                        color: "#0077b5",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/tfrench.art/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Using the Instagram logo from FontAwesome */}
                    <FaInstagram
                      style={{
                        fontSize: "48px",
                        color: "#E4405F",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </Block>
              </Block>
            </Block>
            <Block width="75%" padding="40px">
              <Routes>
                <Route path="/" element={<BlogPostDirectory />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/art" element={<ArtGallery />} />
              </Routes>
            </Block>
          </Block>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
