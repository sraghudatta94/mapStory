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

test("Check if user email address is available", () => {
  render(<App />);
  const userEmail = screen.getByText(/user@email.com/i);
  expect(userEmail).toBeInTheDocument();
});
