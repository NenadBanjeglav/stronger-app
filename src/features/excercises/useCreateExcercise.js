import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditExcercise } from "../../services/apiExcersises";
import toast from "react-hot-toast";

export function useCreateExcercise() {
  const queryClient = useQueryClient();

  const { mutate: createExcercise, isLoading: isCreating } = useMutation({
    mutationFn: (newExcercise) => createEditExcercise(newExcercise),
    onSuccess: () => {
      toast.success("New excercise successfully created");
      queryClient.invalidateQueries({ queryKey: ["excercises"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createExcercise };
}
