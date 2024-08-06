import Header from "./Header";
import { render, screen } from "@testing-library/react";
import appStore from "./appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

test("should be load the login button of header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const loginbutton = screen.getByRole("button", { name: "login" });
  //const loginbutton=screen.getByText("Login")
  expect(loginbutton).toBeInTheDocument();
});
