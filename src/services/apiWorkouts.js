import supabase from "./supabase";

export async function getWorkouts(userId) {
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("profileId", userId);

  if (error) {
    console.error(error);
    throw new Error("Workouts could not be loaded");
  }

  return data;
}

export async function deleteWorkout(id) {
  const { data, error } = await supabase.from("workouts").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Workout could not be deleted");
  }

  return data;
}
