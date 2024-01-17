import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignIn() {
  return (
    <div className="p-8">
      <div className="w[350px] felx flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold">Acessar painel</h1>
          <p className="text-sm text-muted-foreground ">
            Acompanhe suas vendas pelo painel de parceiros
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <Button className="w-full" type="submit">
            Acessa painel
          </Button>
        </form>
      </div>
    </div>
  );
}
