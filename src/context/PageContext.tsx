import { createContext, useContext, useState } from "react";

// Step 1: Create a Context
// @ts-expect-error
const PageContext = createContext();

// Step 2: Create a Context Provider
// @ts-expect-error
export const PageProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  return (
    <PageContext.Provider value={{ step, setStep }}>
      {children}
    </PageContext.Provider>
  );
};

// Step 3: Use the Context Provider
// Wrap your application with the PageProvider component in your root component

// Step 4: Access the Context Value
// Use useContext(PageContext) in components where you need access to the current page value
export const usePageContext = () => useContext(PageContext);
