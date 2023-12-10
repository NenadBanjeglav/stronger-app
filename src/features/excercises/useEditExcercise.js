import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditExcercise } from "../../services/apiExcersises";

export function useEditExcercise() {
  const queryClient = useQueryClient();

  const { mutate: editExcercise, isLoading: isEditing } = useMutation({
    mutationFn: ({ newExcerciseData, id }) =>
      createEditExcercise(newExcerciseData, id),
    onSuccess: () => {
      toast.success("Excercise successfully edited");
      queryClient.invalidateQueries({ queryKey: ["excercises"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editExcercise, isEditing };
}
