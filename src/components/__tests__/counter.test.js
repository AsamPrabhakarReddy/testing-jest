
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer"
import Counter from "../../Counter";

describe('Counting functionality Testing == > ', ()=>{
    it('increment testing', ()=>{
        render(<Counter/>)

        const counter = screen.getByTestId('count')
        const increment = screen.getByTestId('incre')

        fireEvent.click(increment)

        expect(counter).toHaveTextContent("1")

    })

    it('decrement counting testing', ()=>{
        render(<Counter/>)

        const counter = screen.getByTestId('count')
        const decrement = screen.getByTestId('decre')

        fireEvent.click(decrement)

        expect(counter).toHaveTextContent("-1")
    })
})


describe('using snapshot ', ()=>{
    it("snapshot testing",()=>{
        const tree = renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();

    })
})