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
    const filterElement = screen.getByText(/Select Filter/i)
    expect(filterElement).toBeInTheDocument()
})

test("Test Filter pop up onclick", () => {
    render(<App />)
    const filterElement = screen.getByText(/Select Filter/i)
    fireEvent.click(filterElement)

    const options = screen.getByLabelText(/Business/i)
    expect(options).toBeInTheDocument()

    const option2 = screen.getByLabelText(/Holiday/i)
    expect(option2).toBeInTheDocument()

    const option3 = screen.getByLabelText(/School/i)
    expect(option3).toBeInTheDocument()
})

test("Test filter to get data", () => {
    render(<App />)
    const filterElement = screen.getByText(/Select Filter/i)
    fireEvent.click(filterElement)

    const options = screen.getByLabelText(/Business/i)
    fireEvent.click(options)

    const franceTrip = screen.getByText("France Other Trip")
    expect(franceTrip).toBeInTheDocument()
})

test("Test filter to not get other trips", () => {
    render(<App />)
    const filterElement = screen.getByText(/Select Filter/i)
    fireEvent.click(filterElement)

    const options = screen.getByLabelText(/Business/i)
    fireEvent.click(options)

    const tripName = screen.getByText("1 Trip")
    expect(tripName).toBeInTheDocument()
})

