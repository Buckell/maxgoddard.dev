export default function SkillIcon(props) {
    const {src} = props;

    return (
        <div className="image" style={{ background: `url(${src})` }} />
    );
}