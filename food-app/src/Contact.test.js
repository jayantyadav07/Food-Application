import Contact from "./Contact"
import {render,screen} from "@testing-library/react"
test("sholud load contact us component",()=>{
    render(<Contact/>)

    const heading= screen.getByRole("heading")
    //Assertion
    expect(heading).toBeInTheDocument();
})

test("should load button inside contact component",()=>{
    render(<Contact/>)
    const button = screen.getByText("submit")
    expect(button).toBeInTheDocument()
})

test("should load input name inside contact component",()=>{
    render(<Contact/>)
    const inputName =screen.getByPlaceholderText("name")
    expect(inputName).toBeInTheDocument()
})

test("should load all input box isnide my contact component",()=>{
    render(<Contact/>)
    const inputboxes=screen.getAllByRole("textbox")
    console.log(inputboxes.length)
    expect(inputboxes.length).toBe(2)
})