"use client";

import { useState } from "react";
import Button from "../../components/button";
import GlobalModal from "../../components/globalModal";
import Input from "../../components/input";
import FormComponent from "./components/FormComponent";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [step, setStep] = useState<number>(1);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function typePassword() {
    if (login.length > 5) {
      setShowPassword(true);
    }
  }

  const nextStep = () =>
    step == 3 ? router.push("/login") : setStep(step + 1);
  const lastStep = () => step != 1 && setStep(step - 1);

  return (
    <div className="flex">
      <div className="flex w-full items-center justify-center h-screen">
        <div className="flex flex-col gap-3 p-5 w-full max-w-[500px] px-[]">
          <h1 className="logoStyle">CatólicaSC</h1>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg text-title font-bold">Seja bem-vindo(a)!</h1>
            <p className="text-light text-sm">
              Para fazer o login, insira seu email da instituição e depois sua
              senha. Para se cadastrar na plataforma, você precisa receber um
              convite.
            </p>
          </div>

          <Input
            placeholder="Email ou nome de usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          {showPassword && (
            <Input
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          )}

          <div className="flex flex-col gap-3">
            <Button
              label={showPassword ? "Logar" : "Continuar"}
              onClick={
                showPassword ? () => router.push("/dashboard") : typePassword
              }
              disabled={login === ""}
            />

            <GlobalModal
              title={
                step == 1
                  ? "Inserir código de cadastro no sistema"
                  : "Realizar cadastro"
              }
              description={
                step == 1
                  ? "Insira abaixo o código de convite que você recebeu de um usuário já cadastrado na plataforma continuar com o cadastro."
                  : "Tudo pronto! Agora você precisa apenas preencher os dados restantes para finalizar o cadastro."
              }
              content={<FormComponent step={step} nextStep={nextStep} />}
              goBackFunc={step == 1 ? undefined : lastStep}
            >
              <Button
                label="Inserir código de cadastro (convite)"
                theme="Secondary"
              />
            </GlobalModal>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden items-center justify-center bg-[#FF3163] w-full h-screen"></div>
    </div>
  );
}
