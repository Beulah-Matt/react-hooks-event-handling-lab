// Code EyesOnMe Component Here
// 1. In the `components/EyesOnMe.js` file, create a `EyesOnMe` React component.
// 2. In that component, render a `button` with the text `'Eyes on me'`.
// 3. On that `button`, add event handlers that listen for the `focus` and `blur` events.
// 4. When the `focus` event fires, use `console.log` to print out the text `'Good!'`.
// 5. When the `blur` event fires, use `console.log` to print out the text `'Hey! Eyes on me!'`.

import React from "react";

function EyesOnMe(){

    function handleBlur(){
        console.log('Hey! Eyes on me!');
    }

    function handleFocus(){
        console.log('Good!');
    }

    return (
        <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
    )
}
export default EyesOnMe