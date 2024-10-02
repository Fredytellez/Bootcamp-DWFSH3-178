import { useState } from "react"

export const useHook = (initialValue) => {
    const [value, setValue] = useState(initialValue);


    return{
        value,
        bind: {
            value,
            onChange: event => {
                console.log(event.target.value);
                setValue(event.target.value);
            }
        },
        reset: () => setValue(""),
        setValue,
    }
} 