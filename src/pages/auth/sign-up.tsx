import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = Z.object({
  restaurantName: Z.string().min(3, {
    message: "Nome inválido minomo 3 caracteres",
  }),
  managerName: Z.string().min(3, {
    message: "Nome inválido minomo 3 caracteres",
  }),
  phone: Z.string().min(8, { message: "Telefone inválido minimo 8 digitos" }),
  email: Z.string().email({ message: "Email inválido" }),
});

type TypeSignUpForm = Z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<TypeSignUpForm>();

  async function handleSignIn(data: TypeSignUpForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("restaurante cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch (error) {
      toast.error("Credenciais inválidas");
    }
  }

  return (
    <div className="p-8">
      <Button variant="secondary" asChild className="absolute top-8 right-8">
        <Link to="/sign-up">Fazer Login</Link>
      </Button>

      <div className="w[350px] felx flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold">Criar conta</h1>
          <p className="text-sm text-muted-foreground ">
            Seja um parceiro e acompanhe suas vendas
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Nome do estabelecimento</Label>
            <Input
              type="text"
              id="restaurantName"
              {...register("restaurantName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu nome</Label>
            <Input
              type="managerName"
              id="managerName"
              {...register("managerName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input type="email" id="email" {...register("email")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular</Label>
            <Input type="tel" id="phone" {...register("phone")} />
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Finalizar cadastro
          </Button>

          <p className="text-center text-sm text-muted-foreground px-6 leading-relaxed">
            Ao continuar, você concorda com os{" "}
            <a href="#" className="underline underline-offset-4 ">
              Termos de Serviço
            </a>{" "}
            e{" "}
            <a href="#" className="underline underline-offset-4 ">
              Politica de Privacidade
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
