import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// you don't need to include the JSX.Element, that's implied
// components have to return a JSX.Element or null
export const Hello = (props: HelloProps): JSX.Element => {
    return (
        <h1>Hello from {props.compiler} and {props.framework}!</h1>
    )
}