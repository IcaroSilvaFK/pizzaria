import { useQuery } from "react-query";
import { api } from "../services/axios";

interface IDataProps {
  pizza?: string;
  suco?: string;
  creme?: string;
  concluded: boolean;
  id: number;
}

export function useOrderConclused() {
  const { data, isError, isFetching } = useQuery<IDataProps[]>(
    `concluidos`,
    async () => {
      const data = await api.get("/concluidos");

      return data.data;
    },
    { refetchInterval: 60 * 60 }
  );
  return { data, isError, isFetching };
}
