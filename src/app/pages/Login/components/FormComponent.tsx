"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import LargeInput from "@/app/components/resizable";
import { useState } from "react";

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

  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

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
            placeholder="Email (@catolica.org.br)*"
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
            disabled={code.length < 8}
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
            onClick={closeFunc}
            disabled={
              (password === "" && confirmPassword === "") ||
              password !== confirmPassword
            }
            label={"Finalizar"}
          />
        </div>
      )}
    </div>
  );
}
