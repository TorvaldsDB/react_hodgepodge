import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./Toggle";
import Clock from "./Clock";
import Calculator from "./Calculator";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";
import CustomTextInput from "./CustomTextInput";
import OuterClickExample from "./OuterClickExample";
import BlurExample from "./BlurExample";
import AutoFocusTextInput from "./AutoFocusTextInput";
import LoginControl from "./LoginControl";
import Mailbox from "./Mailbox";
import Page from "./Page";
import Blog from "./Blog";
import ListOfTenThings from "./ListOfTenThings";
import Example from "./Example";
import TitleChangeExample from "./TitleChangeExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BlurExample />
        <OuterClickExample />
        <AutoFocusTextInput />
        <CustomTextInput />
        <Reservation />
        <FlavorForm />
        <NameForm />
        <EssayForm />
        <Toggle />
        <Clock />
        <Calculator />
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page />
        <Blog posts={posts} />
        <SpreadButton />
        <ListOfTenThings />
        <Example />
        <TitleChangeExample />
      </header>
    </div>
  );
}

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const SpreadButton = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

const messages = ["React", "Re: React", "Re:Re: React"];
const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

export default App;
