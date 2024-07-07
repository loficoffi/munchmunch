import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Navbar from "../components/Navbar.tsx";


// ComponentPreviews is a component that uses the React Buddy IDE Toolbox to provide a preview of components.
// The Previews component takes a palette prop, which is provided by PaletteTree, to organize and manage the previewed components.
const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
        </Previews>
    );
};

// Exporting the ComponentPreviews component as the default export.
export default ComponentPreviews;