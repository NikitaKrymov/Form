import React, { createContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    return(
        <FormContext.Provider
        >
            {children}
        </FormContext.Provider>
    );
}