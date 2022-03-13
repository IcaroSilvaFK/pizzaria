import { useQuery } from "react-query";

import { api } from "../services/axios";
interface INewOrderProps {
  creme: string | boolean;
  isConcluded: boolean;
  pizza: string | boolean;
  suco: string | boolean;
  id: string | number;
}

export function usePedidos() {
  const { data, isError, isFetching } = useQuery<INewOrderProps[]>(
    "pedidos",
    async () => {
      const { data } = await api.get("/pedidos");
      return data;
    },
    {
      refetchInterval: 6000,
      refetchOnWindowFocus: false,
    }
  );

  return { data, isError, isFetching };
}
