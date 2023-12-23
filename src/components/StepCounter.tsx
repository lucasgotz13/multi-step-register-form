export default function StepCounter() {
    return (
        <div className="flex items-center justify-center">
            <p>Step 1 of 3</p>
            <div className="flex items-center justify-center gap-2">
                <p className="text-5xl">.</p>
                <p className="text-5xl">.</p>
                <p className="text-5xl">.</p>
            </div>
        </div>
    );
}
