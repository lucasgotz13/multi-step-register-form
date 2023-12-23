import { twMerge } from "tailwind-merge";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
export default function FirstStep() {
    const { name, setName, email, setEmail, error, setError, setStep } =
        useContext(AppContext);

    const handleClick = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            setError(true);
            return;
        } else {
            setError(false);
            setStep(2);
        }
    };

    return (
        <>
            <form className="bg-primary w-4/5 md:w-2/5 h-[57%] max-w-lg p-10 rounded-lg border border-accentText">
                <h1 className="text-whiteText text-2xl mb-8">Register</h1>
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-1">
                        <label className="text-labelText" htmlFor="name">
                            Name{" "}
                        </label>
                        <input
                            type="text"
                            placeholder="enter your name"
                            className={twMerge(
                                "bg-primary p-3 rounded-xl border-2 text-whiteText border-accentText placeholder:text-accentText",
                                error && "bg-errorBg border-error"
                            )}
                            onChange={(e) => {
                                setName(e.target.value);
                                setError(false);
                            }}
                        />
                        {error && (
                            <p className="text-error text-xs ml-auto">
                                Enter a valid email
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-labelText" htmlFor="email">
                            Email{" "}
                        </label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className={twMerge(
                                "bg-primary p-3 rounded-xl border-2 text-whiteText border-accentText placeholder:text-accentText",
                                error && "bg-errorBg border-error"
                            )}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && (
                            <p className="text-error text-xs ml-auto">
                                Enter a valid email
                            </p>
                        )}
                    </div>
                    <button
                        onClick={handleClick}
                        className="mx-auto px-10 py-3 bg-gradient-to-b from-[#845EEE] to-[#652CD1] text-whiteText rounded-full"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </>
    );
}
