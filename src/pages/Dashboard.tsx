import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import searchSVG from "../assets/search.svg";
import { RefundItem, type RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categries";
import { formatCurrency } from "../utils/formatCurrency";
import { Pagination } from "../components/Pagination";
import { api } from "../services/api";
import { AxiosError } from "axios";

const PER_PAGE = 5;

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPage] = useState(10);
  const [refund, setRefund] = useState<RefundItemProps[]>([]);

  async function fetchRefunds() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`,
      );

      setRefund(
        response.data.refunds.map((ref) => ({
          id: ref.id,
          name: ref.user.name,
          description: ref.name,
          amount: formatCurrency(ref.amount),
          categoryImg: CATEGORIES[ref.category].icon,
        })),
      );

      setTotalOfPage(response.data.pagination.totalPages);
    } catch (error) {
      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      alert("Não foi possível carregar!");
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchRefunds();
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > totalOfPage) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

  useEffect(() => {
    fetchRefunds();
  }, [page]);

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={onSubmit}
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

      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        {refund.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>

      <Pagination
        current={page}
        total={totalOfPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}
