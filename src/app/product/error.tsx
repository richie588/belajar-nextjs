"use client"

import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}
) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-screen items-center align-center justify-center pb-10">
            <div>
                <h1 className="font-bold text-xl">Something went wrong</h1>
                <button className="block mx-auto mt-2" onClick={() => reset()}>Try again</button>
            </div>
        </div>
    );
}