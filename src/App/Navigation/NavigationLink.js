export default function NavigationLink(props) {
    const {children, onClick} = props;

    return (
        <div onClick={onClick}>
            {children}
        </div>
    );
}