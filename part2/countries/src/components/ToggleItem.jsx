import React from "react";
import { useState } from "react";
import CountryDetails from "./CountryDetails";

const ToggleItem = ({ country }) => {
    const [detailToggle, setDetailToggle] = useState(false);
    return (
        <>
            <button style={{ margin: ".3rem" }} onClick={() => setDetailToggle(!detailToggle)}>
                {detailToggle ? "hide" : "show"}
            </button>
            {detailToggle ? (
                <>
                    <br />
                    <CountryDetails country={country} />
                </>
            ) : null}
        </>
    );
};

export default ToggleItem;
