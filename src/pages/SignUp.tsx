import type React from "react";
import { string, z, ZodError } from "zod";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useState } from "react";

const signUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Informe o nome" }),
    email: z.string().email({ message: "Ë-mail inválido" }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter pelo menos 6 dígitos" }),
    passwordConfirm: z.string({ message: "Confirmar senha" }),
  })
  .refine((data) => (data.password = data.passwordConfirm), {
    message: "As senhas não são iguais",
    path: ["passwordConfirm"],
  });

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      alert("Não foi possível cadastrar");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirmação da Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
