import express from "express";
import { calculateBMI, calculateExercises } from "./helpers";
import { validateBMIQuery, validateExercisesBody, logger } from "./middlewares";

const app = express();
app.use(express.json());
app.use(logger);

app.route("/hello").get((_req, res) => {
  res.send("Hello Full Stack");
});

app.route("/bmi").get(validateBMIQuery, (req, res) => {
  const { height, weight } = req.query;
  const bmi = calculateBMI(Number(height), Number(weight));
  const resData = { height, weight, bmi };
  return res.send(resData);
});

app.route("/exercises").post(validateExercisesBody, (req, res) => {
  const { daily_exercises, target } = req.body;
  const summary = calculateExercises(daily_exercises, target);
  return res.json(summary);
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
