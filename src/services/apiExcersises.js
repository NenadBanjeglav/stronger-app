import supabase, { supabaseUrl } from "./supabase";

export async function getExcersises() {
  const { data, error } = await supabase.from("excercise").select("*");

  if (error) {
    console.error(error);
    throw new Error("Excersises could not be loaded");
  }

  return data;
}

export async function createEditExcercise(newExcercise, id) {
  const hasImagePath = newExcercise.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newExcercise.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newExcercise.image
    : `${supabaseUrl}/storage/v1/object/public/excercise-images/${imageName}`;

  let query = supabase.from("excercise");

  if (!id) query = query.insert([{ ...newExcercise, image: imagePath }]);

  if (id)
    query = query.update({ ...newExcercise, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Excersises could not be created");
  }

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("excercise-images")
    .upload(imageName, newExcercise.image);

  if (storageError) {
    await supabase.from("excercise").delete().eq("id", data.id);
    throw new Error(
      "Excersise image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteExcercise(id) {
  const { data, error } = await supabase
    .from("excercise")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Excersises could not be deleted");
  }

  return data;
}
