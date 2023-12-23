import { AppContext } from "../context/AppContext";
import { useContext } from "react";
export default function FirstStep() {
    const { name, email, choice } = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for registering!");
    };

    return (
        <form className="bg-primary w-4/5 md:w-2/5 h-[57%] max-w-lg p-10 rounded-lg border border-accentText">
            <h1 className="text-whiteText text-2xl mb-8">Summary</h1>
            <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-2">
                    <p className="text-labelText">
                        Name: <span className="text-whiteText">{name}</span>
                    </p>
                    <p className="text-labelText">
                        Email: <span className="text-whiteText">{email}</span>
                    </p>
                </div>
                <div>
                    <p className="text-labelText">Topics:</p>
                    <ul className="list-disc">
                        <li className="ml-7 text-whiteText">{choice}</li>
                    </ul>
                </div>
                <button
                    onClick={handleSubmit}
                    className="mx-auto mt-10 px-10 py-3 bg-gradient-to-b from-[#845EEE] to-[#652CD1] text-whiteText rounded-full"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
}
