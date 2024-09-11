export default function PopIn(props) {
    const {children, show, delay, duration} = props;

    return (
        <span
            style={{
                opacity: show ? 1 : 0,
                transition: `opacity ${duration || '100ms'} linear ${delay || '0'}`,
            }}
        >
            {children}
        </span>
    );
}