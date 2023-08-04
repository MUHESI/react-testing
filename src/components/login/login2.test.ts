import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../src/pages/auth/Login";
import { BrowserRouter } from "react-router-dom";

test("Email and password input, button should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputElt = screen.getByPlaceholderText("Ton addresse email");
  const pwdInputElt = screen.getByPlaceholderText("Ton mot de passe");
  const btnInputElt = screen.getByRole("button");
  expect(emailInputElt).toBeInTheDocument();
  expect(pwdInputElt).toBeInTheDocument();
  expect(btnInputElt).toBeInTheDocument();
  expect(btnInputElt).toHaveTextContent("Se connecter");
});

test("login component renders correctly", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  // expect(screen.getByLabelText("Username")).toBeInTheDocument();
  // expect(screen.getByLabelText("Password")).toBeInTheDocument();
  // expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
});

test("password can be shown or hidden by clicking on the eye icon", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const pwdInputElt = screen.getByPlaceholderText(
    "Ton mot de passe"
  ) as HTMLInputElement;

  const eyeIcon = screen.getByTestId("eye-icon");
  expect(pwdInputElt.type).toBe("password");
  fireEvent.click(eyeIcon);
  expect(pwdInputElt.type).toBe("text");
  fireEvent.click(eyeIcon);
  expect(pwdInputElt.type).toBe("password");
});
