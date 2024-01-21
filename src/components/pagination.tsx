import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
  PageIndex: number;
  totalCount: number;
  perPage: number;
}

export const Pagination = ({
  PageIndex,
  totalCount,
  perPage,
}: PaginationProps) => {
  const totalPage = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>
      <div className="flex gap-6 lg:gap-8">
        <div className=" text-sm font-medium">
          Página {PageIndex + 1} de {totalPage}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira Pagina</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Pagina Anterior</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Próxima Pagina</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última Pagina</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
