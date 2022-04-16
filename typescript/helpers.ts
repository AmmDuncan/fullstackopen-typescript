export const calculateBMI = (heightInCM: number, massInKG: number) => {
  const heightInM = heightInCM / 100;

  const bmi = massInKG / heightInM ** 2;

  if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal (healthy weight)";
  } else if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 30) {
    return "Obese";
  } else {
    return "Overweight";
  }
};

interface ExerciseSummary {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Description {
  [index: number]: string;
}

export const calculateExercises = (
  exerciseHours: number[],
  target: number
): ExerciseSummary => {
  const periodLength: number = exerciseHours.length;
  const trainingDays: number = exerciseHours.filter((hours) => hours).length;
  const average: number =
    exerciseHours.reduce((total, cur) => total + cur, 0) / periodLength;
  const success: boolean = average >= target;
  let rating: 1 | 2 | 3;

  if (success) rating = 3;
  else if (average > target / 2) rating = 2;
  else rating = 1;

  const descriptions: Description = {
    1: "you could do better",
    2: "not too bad but could be better",
    3: "well done",
  };
  const ratingDescription: string = descriptions[rating];

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};
