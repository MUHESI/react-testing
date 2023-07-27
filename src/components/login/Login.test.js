import { render, screen } from '@testing-library/react';
import Login from './Login';


test('Username input should be rendered', () => {
  render(<Login />)
  const userInputElt = screen.getByPlaceholderText(/username/i)
  expect(userInputElt).toBeInTheDocument()
})

test("password input should be rendered", () => {
  render(<Login />);
  const pswdInputEl = screen.getByPlaceholderText(/password/i);
  expect(pswdInputEl).toBeInTheDocument()
})

test('button should be rendered', () => {
  render(<Login />)
  const btnInputElt = screen.getByRole("button")
  expect(btnInputElt).toBeInTheDocument()
})

// ||

test('Username input should be empty', () => {
  render(<Login />)
  const userInputElt = screen.getByPlaceholderText(/username/i)
  expect(userInputElt.value).toBe('')
})

test("password input should be empty", () => {
  render(<Login />);
  const pswdInputEl = screen.getByPlaceholderText(/password/i);
  expect(pswdInputEl.value).toBe('')
})
test('button should be disabled', () => {
  render(<Login />)
  const btnInputElt = screen.getByRole("button")
  expect(btnInputElt).toBeInTheDocument()
})

test('Error message should not be visible', () => {
  render(<Login />)
  const errorElt = screen.getByTestId("error")
  expect(errorElt).not.toBeVisible()
})

 git commit - m'[testing-login] test for error message

 Error message should not be visible'
