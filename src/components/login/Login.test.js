import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import Login from './Login';


jest.mock('axios', () => ({
  __esModule: true,
  default: { get: () => ({ data: { id: 1, name: 'test', } }) }
}))

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
  expect(btnInputElt).toBeDisabled()
})

test('Error message should not be visible', () => {
  render(<Login />)
  const errorElt = screen.getByTestId("error")
  expect(errorElt).not.toBeVisible()
})
// |||

test('Username input should change', () => {
  render(<Login />)
  const userInputElt = screen.getByPlaceholderText(/username/i)
  const testValue = 'test'
  fireEvent.change(userInputElt, { target: { value: testValue } })
  expect(userInputElt.value).toBe(testValue)
})

test("password input should change", () => {
  render(<Login />);
  const pswdInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = 'root'
  fireEvent.change(pswdInputEl, { target: { value: testValue } })
  expect(pswdInputEl.value).toBe(testValue)
})

test('button should not be disabled when inputs exit', () => {
  render(<Login />)
  const btnInputElt = screen.getByRole("button")
  const userInputElt = screen.getByPlaceholderText(/username/i)
  const pswdInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test'
  fireEvent.change(userInputElt, { target: { value: testValue } })
  fireEvent.change(pswdInputEl, { target: { value: testValue } })
  expect(btnInputElt).not.toBeDisabled()
})


test("loading should not be rendered", () => {
  render(<Login />);
  const btnEl = screen.getByRole('button');
  expect(btnEl).not.toHaveTextContent(/please wait/i)
})

test("loading should be rendered when we click", () => {
  render(<Login />);
  const btnEl = screen.getByRole('button');
  const userInputElt = screen.getByPlaceholderText(/username/i)
  const pswdInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test'
  fireEvent.change(userInputElt, { target: { value: testValue } })
  fireEvent.change(pswdInputEl, { target: { value: testValue } })
  fireEvent.click(btnEl)
  expect(btnEl).toHaveTextContent(/please wait/i)

})

test("loading should not be rendered afer fetching", async () => {
  render(<Login />);
  const btnEl = screen.getByRole('button');
  const userInputElt = screen.getByPlaceholderText(/username/i)
  const pswdInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test'
  fireEvent.change(userInputElt, { target: { value: testValue } })
  fireEvent.change(pswdInputEl, { target: { value: testValue } })
  fireEvent.click(btnEl)
  await waitFor(() =>
    expect(btnEl).not.toHaveTextContent(/please wait/i)
  )

})


