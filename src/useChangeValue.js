import {useState} from "react";

export default function useChangeValue(props, defaultValue) {
    const [internalValue, setInternalValue] = useState(props.defaultValue || defaultValue);

    const controlled = Boolean(props.onChange);

    const actualValue = controlled ? props.value : internalValue;

    const onChange = (e) => {
        if (controlled) {
            props.onChange(e);
        } else {
            setInternalValue(e);
        }
    };

    return {
        value: actualValue,
        controlled,
        set: onChange,
        componentProps: {
            value: actualValue,
            onChange: (e) => onChange(e.currentTarget.value),
        },
        checkedComponentProps: {
            checked: actualValue,
            onChange: (e) => onChange(e.currentTarget.checked),
        },
    };
}