"use client";

import { registerUser } from "@/app/actions/authActions";
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);

    if (result.status === "success") {
      console.log("User registered successfully");
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((e) => {
          const fieldName = e.path.join() as "name" | "email" | "password";
          setError(fieldName, { message: e.message });
        });
      } else {
        setError("root.serverError", { message: result.error });
      }
    }
  };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  return (
    <Card className="mx-auto mt-7 w-xs md:w-lg bg-gray-800">
      <Card.Header className="text-center flex flex-col gap-2">
        <Card.Title className="text-white text-xl">Welcome!</Card.Title>
        <Card.Description className="text-gray-300 text-md">
          Register, and join us to start chatting!
        </Card.Description>
      </Card.Header>
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField isInvalid={!!errors.name}>
          <Label className="text-white">Name</Label>
          <Input
            {...register("name")}
            className={"bg-gray-900 text-white"}
            placeholder="Enter name"
          />
          <FieldError>{errors.name?.message}</FieldError>
        </TextField>
        <TextField isInvalid={!!errors.email}>
          <Label className="text-white">Email</Label>
          <Input
            {...register("email")}
            className={"bg-gray-900 text-white"}
            placeholder="Enter email"
          />
          <FieldError>{errors.email?.message}</FieldError>
        </TextField>
        <TextField isInvalid={!!errors.password}>
          <Label className="text-white">Pasword</Label>
          <Input
            {...register("password")}
            type="password"
            className={"bg-gray-900 text-white"}
            placeholder="Enter password"
          />
          <FieldError>{errors.password?.message}</FieldError>
        </TextField>
        {errors.root?.serverError?.message && (
          <p className="text-red-500 text-sm mx-auto">
            {errors.root?.serverError?.message}
          </p>
        )}
        <Card.Footer className="flex flex-col gap-2">
          <Button
            className={"w-full bg-indigo-600"}
            variant="primary"
            type="submit"
            isDisabled={!isValid}
          >
            Register
          </Button>
          <Button
            className={"w-full bg-gray-700 text-white"}
            variant="secondary"
          >
            Go Home
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
}
