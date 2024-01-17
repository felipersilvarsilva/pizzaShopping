import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import { toast } from "sonner";

const signInForm = Z.object({
  email: Z.string().email({ message: "Email inválido" }),
});

type TypeSignInForm = Z.infer<typeof signInForm>;

export function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<TypeSignInForm>();

  async function handleSignIn(data: TypeSignInForm) {
    try {
      const { email } = data;
      console.log(email);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("enviamos um link para o email!");
    } catch (error) {
      toast.error("Email inválido");
    }
  }

  return (
    <div className="p-8">
      <div className="w[350px] felx flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold">Acessar painel</h1>
          <p className="text-sm text-muted-foreground ">
            Acompanhe suas vendas pelo painel de parceiros
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Acessa painel
          </Button>
        </form>
      </div>
    </div>
  );
}
