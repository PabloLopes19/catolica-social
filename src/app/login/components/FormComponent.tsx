"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import LargeInput from "@/app/components/resizable";
import { createUser } from "@/services/userService";
import { getEmailDomain } from "@/utils/globalUtils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface Props {
  closeFunc?: (e: any) => void;
  step: number;
  nextStep: (e: any) => void;
}

export default function FormComponent({
  closeFunc,
  step,
  nextStep,
}: Readonly<Props>) {
  const [code, setCode] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const catolicaDomain = "catolicasc.edu.br";

  const router = useRouter();

  function validatePassword() {
    if (password?.length < 1 || confirmPassword.length < 1) {
      return true;
    } else {
      return password !== confirmPassword;
    }
  }

  async function registerUser() {
    setLoading(true);

    const data = await createUser({
      name,
      username,
      avatar: "",
      email,
      bio,
      followers: 0,
    });

    if (data.status == 200) {
      router.push("/dashboard");
      setLoading(false);
    }
    if (data.status == 201) {
      toast.error("Nome de usuário indisponível!");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col w-full gap-3">
      {step == 1 && (
        <div className="flex flex-col gap-3">
          <Input
            placeholder="Código XXXX-XXXX"
            onChange={(e) => setCode(e.target.value)}
            maxLength={8}
          />

          <Button
            onClick={nextStep}
            disabled={code.length < 8}
            label="Continuar"
          />
        </div>
      )}

      {step == 2 && (
        <>
          <Input
            placeholder="Nome*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Email (@catolicasc.edu.br)*"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Nome de usuário único*"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <LargeInput
            placeholder="Bio"
            value={`${bio}`}
            onChange={(e) => setBio(e.target.value)}
          />

          <Button
            onClick={nextStep}
            disabled={
              getEmailDomain(email) !== catolicaDomain ||
              name === "" ||
              username === ""
            }
            label="Continuar"
          />
        </>
      )}

      {step == 3 && (
        <div className="flex flex-col gap-3">
          <Input
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Input
            placeholder="Confirmar senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />

          <Button
            loading={loading}
            onClick={registerUser}
            disabled={validatePassword() || loading}
            label={"Finalizar"}
          />
        </div>
      )}
    </div>
  );
}
