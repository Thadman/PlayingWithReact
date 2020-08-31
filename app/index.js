import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import { ThemeProvider } from "./contexts/theme";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light",
        }));
      },
    };
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Route exact path="/" component={Popular} />
              <Route exact path="/battle" component={Battle} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

// we have wrapped all of our Component in the ThemeProvider passing it the value prop which is set in state within the constructor. Now for any components that we want to have the theme we can wrap them in the ThemeConsumer and they will have access to the theme through the value that was passed into ThemeProvider as a prop. Anytime we invoke the toggleTheme() , any Component that is wrapped inside of the ConsumerTheme will update and therefore change themes.
