import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteWorkout as deleteWorkoutApi } from "../../services/apiWorkouts";

export function useDeleteWorkout() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteWorkout } = useMutation({
    mutationFn: (id) => deleteWorkoutApi(id),
    onSuccess: () => {
      toast.success("Workout successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["workouts"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteWorkout };
}
