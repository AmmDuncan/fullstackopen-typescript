import { CoursePart } from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ part }: { part: CoursePart }) => {
  switch (part.type) {
    case "normal":
      return (
        <p>
          {part.name} {part.exerciseCount} {part.description}
        </p>
      );
    case "special":
      return (
        <p>
          {part.name} {part.exerciseCount} {part.description}{" "}
          {part.requirements.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </p>
      );
    case "groupProject":
      return (
        <p>
          {part.name} {part.exerciseCount} {part.groupProjectCount}
        </p>
      );
    case "submission":
      return (
        <p>
          {part.name} {part.exerciseCount} {part.exerciseSubmissionLink}
        </p>
      );
    default:
      assertNever(part);
  }
  return null;
};

export default Part;
