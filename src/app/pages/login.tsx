import Button from "../components/button";
import Input from "../components/input";

export default function Login() {
  return (
    <div className="flex ">
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

          <Input placeholder="Email ou nome de usuário" />

          <div className="flex flex-col gap-3">
            <Button label="Continuar" />
            <Button
              label="Inserir código de cadastro (convite)"
              theme="Secondary"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex hidden items-center justify-center bg-[#FF3163] w-full h-screen"></div>
    </div>
  );
}
