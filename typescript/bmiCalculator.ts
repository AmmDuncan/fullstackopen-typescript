import { calculateBMI } from "./helpers";

const parseArguments = () => {
  const args = process.argv;
  const argsLength = args.length;
  if (argsLength < 4) {
    throw new Error("Not enough arguments");
  } else if (argsLength > 4) {
    throw new Error("Too many arguments");
  }

  const arg1 = Number(args[2]);
  const arg2 = Number(args[3]);

  if (isNaN(arg1) || isNaN(arg2)) {
    throw new Error("Invalid argument");
  }

  return {
    arg1,
    arg2,
  };
};

const { arg1, arg2 } = parseArguments();

console.log(calculateBMI(arg1, arg2));
