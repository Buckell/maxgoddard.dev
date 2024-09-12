import {useEffect, useState} from "react";

export default function useResource(fetch, defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const [fetched, setFetched] = useState(false);

    const refresh = () => {
        const result = fetch();
        setFetched(true);

        if (result.then) {
            result.then(setValue);
        } else {
            setValue(result);
        }
    };

    useEffect(() => {
        if (!fetched) {
            refresh();
        }
    }, [setValue, fetch]);

    return [value, refresh];
}