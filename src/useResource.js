import {useEffect, useRef, useState} from "react";

export default function useResource(fetch, defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const fetched = useRef(false);

    const refresh = useRef(() => {
        const result = fetch();
        fetched.current = true;

        if (result.then) {
            result.then(setValue);
        } else {
            setValue(result);
        }
    });

    useEffect(() => {
        if (!fetched.current) {
            refresh.current();
        }
    }, [setValue, fetch, fetched, refresh]);

    return [value, refresh];
}