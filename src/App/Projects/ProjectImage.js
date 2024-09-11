export default function ProjectImage(props) {
    const {src, color} = props;
    return (
        <div
            className="image"
            style={{
                background: src ? `url(${src})` : color || '#511',
            }}
        />
    );
}