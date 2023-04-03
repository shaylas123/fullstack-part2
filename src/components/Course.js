
const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => parts.map(part => <Part key={part.id} part={part}/>);

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum += part.exercises, 0);

    return (
        <b>total of {total} exercises</b>
    );
}


const Course = ({ course }) => {
    const parts = course.parts;
    const name = course.name;

    return (
     <div>
        <Header course={name}/>
        <Content parts={parts}/>
        <Total parts={parts}/>
     </div>
    )
  }
  
  export default Course