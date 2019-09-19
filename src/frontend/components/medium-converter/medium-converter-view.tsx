import * as React from "react";

// export interface MediumConverterProps { compiler: string; framework: string; }

export const MediumConverter = () => {
    return (
        <div id="medium-converter">
            <form>
                <label htmlFor="converter-input">Paste in your medium json</label>
                <input id="converter-input"/>
            </form>
        </div>
    )
}
