/* eslint-disable react/prop-types */

function ExcerciseInfo({ excercise }) {
  const [excerciseData] = excercise;
  const { name } = excerciseData;

  return <>{name}</>;
}

export default ExcerciseInfo;
