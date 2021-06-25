import { render } from "@testing-library/react";
import RadioComponent from "./RadioComponents";

const RadioList = [
    {
        name: '1',
        value: '1'
    },
    {
        name: '2',
        value: '2'
    },
    {
        name: '3',
        value: '3'
    }
]

describe('RadioComponent', () => {
    it('Should render the right number of items', () => {
        const { getByTestId } = render(<RadioComponent list={RadioList} />);
        const div = getByTestId('radio_list-container');
        expect(div.children.length).toBe(RadioList.length);
    })
})