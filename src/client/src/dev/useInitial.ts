import {useState} from "react";
import {InitialHookStatus} from "@react-buddy/ide-toolbox";


// useInitial is a custom hook that manages the initial loading status of a component or process.
// It uses the useState hook to keep track of the loading and error states, and initializes them as false.
export const useInitial: () => InitialHookStatus = () => {
    const [status, setStatus] = useState<InitialHookStatus>({
        loading: false,
        error: false,
    });

    // The hook returns the current status object.
    return status;
};
