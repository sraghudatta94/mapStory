import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import App from "../../../App"

// polly-fill for matchMedia
global.matchMedia =
    global.matchMedia ||
    function () {
        return {
            addListener: jest.fn(),
            removeListener: jest.fn(),
        }
    }

test("Test Search Component is rendered", () => {
    render(<App />)
    const searchElement = screen.getByPlaceholderText(/input search text/i)
    expect(searchElement).toBeInTheDocument()
})

test("Test Search to display searched trip", () => {
    render(<App />)
    const searchElement = screen.getByPlaceholderText(/input search text/i)
    fireEvent.change(searchElement, { target: { value: "Japan" } })
    expect(searchElement.value).toBe("Japan")

    const tripName = screen.getByText("Japan Trip")
    expect(tripName).toBeInTheDocument()
})

test("Test Search not to display other trips", () => {
    render(<App />)
    const searchElement = screen.getByPlaceholderText(/input search text/i)
    fireEvent.change(searchElement, { target: { value: "Japan" } })
    expect(searchElement.value).toBe("Japan")
    fireEvent.keyDown(searchElement, {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27,
    })
    const tripName = screen.getByText("1 Trip")
    expect(tripName).toBeInTheDocument()
})

test("Test Search for invalid values", () => {
    render(<App />)
    const searchElement = screen.getByPlaceholderText(/input search text/i)
    fireEvent.change(searchElement, { target: { value: "XYZ" } })
    expect(searchElement.value).toBe("XYZ")
    fireEvent.keyDown(searchElement, {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27,
    })
    const tripName = screen.getByText("0 Trip")
    expect(tripName).toBeInTheDocument()
})
