import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteExcercise as deleteExcerciseApi } from "../../services/apiExcersises";

export function useDeleteExcercise() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteExcercise } = useMutation({
    mutationFn: (id) => deleteExcerciseApi(id),
    onSuccess: () => {
      toast.success("Excercise successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["excercises"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteExcercise };
}
