import SwitchComponent from "./SwitchComponent";
import { render, fireEvent, getByTestId } from '@testing-library/react';
import TextInput from './TextInput';

describe('Switch', () => {
    it('should toggle the switch on click', () => {
        const onChange = jest.fn();

        const { getByTestId } = render(<SwitchComponent value={false} label="" required={false} onChange={onChange} />);
        const button = getByTestId('switch-toggle');
        const slider = getByTestId('switch-slider');
        expect(slider.checked).toBe(false);
        fireEvent.click(button);
        expect(onChange.mock.calls).toEqual([
            [true]
        ]);
    });
})