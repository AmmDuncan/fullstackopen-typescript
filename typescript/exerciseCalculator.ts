import { calculateExercises } from "./helpers";

const parseHourList = () => {
  const args = process.argv;
  const argsLength = args.length;
  if (argsLength < 3) {
    throw new Error("Not enough arguments");
  }

  const [, , ...numbers]: number[] = args.map((i) => Number(i));

  numbers.forEach((time) => {
    if (isNaN(time)) {
      throw new Error("Invalid argument");
    }
  });

  const [target, ...list] = numbers;

  return { target, list };
};

const { target, list } = parseHourList();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
console.log(calculateExercises(list, target));
