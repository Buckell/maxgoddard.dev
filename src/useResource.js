import {useEffect, useState} from "react";

export default function useResource(fetch, defaultValue) {
    const [value, setValue] = useState(defaultValue);

    const refresh = () => {
        const result = fetch();

        if (result.then) {
            result.then(setValue);
        } else {
            setValue(result);
        }
    };

    useEffect(refresh, [setValue]);

    return [value, refresh];
}