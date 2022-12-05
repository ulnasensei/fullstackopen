import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {
    const { name, parts } = course;
    return (
        <div>
            <Header name={name} />
            <Content parts={parts} />
            <Total total={parts.reduce((total, part) => total + part.exercises, 0)} />
        </div>
    );
};

export default Course;
