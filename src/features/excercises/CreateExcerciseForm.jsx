/* eslint-disable react/prop-types */
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import StyledCheckbox from "../../ui/CheckboxForm";
import FormRow from "../../ui/FormRow";

import { useCreateExcercise } from "./useCreateExcercise";
import { useEditExcercise } from "./useEditExcercise";

function CreateExcerciseForm({ excerciseToEdit = {}, onCloseModal }) {
  const { isCreating, createExcercise } = useCreateExcercise();
  const { isEditing, editExcercise } = useEditExcercise();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = excerciseToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editExcercise(
        { newExcerciseData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createExcercise(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Excercise name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Type" error={errors?.type?.message}>
        <Input
          type="text"
          id="type"
          disabled={isWorking}
          {...register("type", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Prime mover" error={errors?.primeMover?.message}>
        <Input
          type="text"
          id="primeMover"
          disabled={isWorking}
          {...register("primeMover", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Compound" error={errors?.isCompound?.message}>
        <StyledCheckbox
          id="isCompound"
          disabled={isWorking}
          {...register("isCompound")}
        ></StyledCheckbox>
      </FormRow>

      <FormRow label="Excercise photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit excercise" : "Create new excercise"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateExcerciseForm;
