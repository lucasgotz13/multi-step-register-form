import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import ThirdStep from "./components/ThirdStep";

function App() {
    const { step } = useContext(AppContext);

    return (
        <div className="font-Inter bg-accentBg h-screen grid place-items-center">
            {step === 1 && <FirstStep />}
            {step === 2 && <SecondStep />}
            {step === 3 && <ThirdStep />}
        </div>
    );
}

export default App;
