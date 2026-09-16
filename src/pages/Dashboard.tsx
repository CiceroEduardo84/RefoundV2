import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import searchSVG from "../assets/search.svg";
import { RefundItem } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categries";
import { formatCurrency } from "../utils/formatcurrency";

const exemplo = {
  id: "123",
  name: "edurado",
  category: "Transporte",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b[1px] border-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSVG} alt="Icone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={exemplo} />
      </div>
    </div>
  );
}
