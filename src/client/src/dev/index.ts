import React from "react";
import {useInitial} from "./useInitial";


// React.lazy() enables lazy loading of components.
// The ComponentPreviews component will only be loaded when it is actually needed.
// This can improve the performance of the application, especially if ComponentPreviews is large.
const ComponentPreviews = React.lazy(() => import("./previews"));


// Exporting the ComponentPreviews component and the useInitial hook for use in other parts of the application.
export {
    ComponentPreviews,
    useInitial
};