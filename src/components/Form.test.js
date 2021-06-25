import { Form } from './Form';
import { fireEvent, render } from '@testing-library/react';

describe('Form', () => {
    describe('render', () => {
        it('should render form', () => {
            const { container } = render(<Form formName="MyTest" />);
            expect(container).toBeDefined();
        });
        it('should display a correct form name', () => {
            const { getByTestId } = render(
                <Form formName="MyTest" />
            );
            const name = getByTestId("form_name");
            expect(name).toHaveTextContent('MyTest');
        });
    });

    it('should change TextInput on enable if switch is on', () => {
        const { getByTestId } = render(<Form />);
        const button = getByTestId('switch-toggle');
        const input = getByTestId('text_input-input');
        fireEvent.click(button);
        expect(input.disabled).toBe(false);
    })
})