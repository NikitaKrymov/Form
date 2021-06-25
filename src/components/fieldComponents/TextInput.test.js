import { render } from "@testing-library/react";
import TextInputComponent from './TextInput';

describe('TextInput', () => {
    it('should render correct required input label', () => {
        const { getByTestId } = render(<TextInputComponent required={true} label='Label Test' onBlur={() => {}}/>);
        const label = getByTestId('text_input-label');
        expect(label).toHaveTextContent('Label Test *');
    });

    it('should be disabled from start', () => {
        const { getByTestId } = render(<TextInputComponent disabled={true}></TextInputComponent>);
        const input = getByTestId('text_input-input');
        expect(input.disabled).toBe(true);
    })
});