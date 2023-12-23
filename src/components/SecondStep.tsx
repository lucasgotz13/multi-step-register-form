import { twMerge } from "tailwind-merge";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
export default function FirstStep() {
    const { choice, setChoice, setStep } = useContext(AppContext);

    const handleClick = (e) => {
        e.preventDefault();

        setChoice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (choice === "") {
            alert("Please select a topic");
            return;
        } else {
            setStep(3);
        }
    };

    return (
        <form className="bg-primary w-4/5 md:w-2/5 h-[57%] max-w-lg p-10 rounded-lg border border-accentText">
            <h1 className="text-whiteText text-2xl mb-8">
                Which topics are you interested in?
            </h1>
            <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-5">
                    <button
                        className={twMerge(
                            "bg-radioBg text-labelText border-2 border-accentText px-5 py-3.5 rounded-xl text-left",
                            choice === "Software Development" &&
                                "bg-secondary text-whiteText"
                        )}
                        type="button"
                        value="Software Development"
                        onClick={handleClick}
                    >
                        Software Development
                    </button>
                    <button
                        className={twMerge(
                            "bg-radioBg text-labelText border-2 border-accentText px-5 py-3.5 rounded-xl text-left",
                            choice === "User Experience" &&
                                "bg-secondary text-whiteText"
                        )}
                        type="button"
                        value="User Experience"
                        onClick={handleClick}
                    >
                        User Experience
                    </button>
                    <button
                        className={twMerge(
                            "bg-radioBg text-labelText border-2 border-accentText px-5 py-3.5 rounded-xl text-left",
                            choice === "Graphic Design" &&
                                "bg-secondary text-whiteText"
                        )}
                        type="button"
                        value="Graphic Design"
                        onClick={handleClick}
                    >
                        Graphic Design
                    </button>
                </div>
                <button
                    onClick={handleSubmit}
                    className="mx-auto px-10 py-3 bg-gradient-to-b from-[#845EEE] to-[#652CD1] text-whiteText rounded-full"
                >
                    Continue
                </button>
            </div>
        </form>
    );
}
