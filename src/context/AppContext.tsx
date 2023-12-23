import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

export default function AppContextProvider({ children }) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const [choice, setChoice] = useState<string>("");

    return (
        <AppContext.Provider
            value={{
                name,
                setName,
                email,
                setEmail,
                error,
                setError,
                step,
                setStep,
                choice,
                setChoice,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
