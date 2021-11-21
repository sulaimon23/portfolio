import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div className="flex">
            What i do!!
            <Typewriter
                options={{
                    strings: ["Angularjs", "React.js", "TypeScript", "Next.js"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
}

export default Type;
