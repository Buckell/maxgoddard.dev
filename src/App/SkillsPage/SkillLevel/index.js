import Container from "./Container";

const levelLabels = [
    'Novice',
    'Intermediate',
    'Advanced',
    'Expert',
];

export default function SkillLevel(props) {
    const {level, color} = props;

    return (
        <Container>
            <div
                className="progress"
                style={{
                    width: `calc(${(level + 1) * 25}% - 30px)`,
                    background: color,
                    borderColor: color,
                    boxShadow: `10px 0 10px 10px ${color || '#368ac3'}`,
                    filter: `drop-shadow(20px 0 10px ${color || '#368ac3'})`,
                }}
            />
            <h3>
                {levelLabels[level]}
            </h3>
        </Container>
    );
}