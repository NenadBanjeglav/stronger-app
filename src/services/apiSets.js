import supabase from "./supabase";

export async function getSets(workoutId) {
  const { data, error } = await supabase
    .from("sets")
    .select("*")
    .eq("workoutId", workoutId);

  if (error) {
    console.error(error);
    throw new Error("Sets could not be loaded");
  }

  return data;
}

export async function getExcerciseById(excerciseId) {
  let { data, error } = await supabase
    .from("excercise")
    .select("*")
    .eq("id", excerciseId);

  if (error) {
    console.error(error);
    throw new Error("Excersise could not be loaded");
  }

  return data;
}
