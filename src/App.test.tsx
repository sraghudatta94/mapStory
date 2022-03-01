import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// polly-fill for matchMedia
global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

test("renders learn react link", () => {
  render(<App />);
  const userEmail = screen.getByText(/user@email.com/i);
  expect(userEmail).toBeInTheDocument();
});
