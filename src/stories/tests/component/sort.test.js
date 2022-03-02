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

test("Test Filter Component is rendered", () => {
    render(<App />)
    const sortElement = screen.getByText(/Date Asc/i)
    expect(sortElement).toBeInTheDocument()
})
