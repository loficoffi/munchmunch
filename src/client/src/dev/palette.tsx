import {Fragment} from "react";
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox";

// PaletteTree is a component that defines a palette of components for the React Buddy IDE Toolbox.
// It organizes components into categories and variants for easy access during development.
export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
            </Component>
        </Category>
    </Palette>
);

// ExampleLoaderComponent is a simple functional component that renders a loading message.
export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    );
}