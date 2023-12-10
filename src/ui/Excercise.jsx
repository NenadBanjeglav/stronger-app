import { useSingleExcercise } from "../features/excercises/useSingleExcercise";
import Empty from "./Empty";
import ExcerciseInfo from "./ExcerciseInfo";
import SpinnerMini from "./SpinnerMini";

/* eslint-disable react/prop-types */
function Excercise({ excerciseId }) {
  const { excercise, isLoading } = useSingleExcercise(excerciseId);

  if (isLoading) return <SpinnerMini />;
  if (!excercise) return <Empty resourceName={"excercise"} />;

  return <ExcerciseInfo as="td" excercise={excercise} />;
}

export default Excercise;
