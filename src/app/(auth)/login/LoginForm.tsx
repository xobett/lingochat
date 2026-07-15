"use client";

import { LoginSchema, loginSchema } from "@/lib/schemas/loginSchema";
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
import { useRouter } from "next/navigation";
import { signInUser } from "@/app/actions/authActions";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data);

    if (result.status === "success") {
      router.push("/members");
      console.log(result);
    } else {
      console.log(result.error);
    }
  };

  return (
    <Card className="mx-auto mt-7 w-xs md:w-lg bg-gray-800">
      <Card.Header className="text-center flex flex-col gap-2">
        <Card.Title className="text-white text-xl">Welcome back!</Card.Title>
        <Card.Description className="text-gray-300 text-md">
          Login and start chatting!
        </Card.Description>
      </Card.Header>
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        <Card.Footer className="flex flex-col gap-2">
          <Button
            className={"w-full bg-indigo-600"}
            variant="primary"
            type="submit"
            isDisabled={!isValid}
          >
            Login
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
