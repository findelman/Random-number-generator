import { useEffect, useState } from "react";
import { apiStatistics } from "../fake-api/api";

export const useStatisticData = (changeInfo) => {
  const [statisticData, SetstatisticData] = useState<any>(apiStatistics[0]);

  useEffect(() => {
    const SearchGameStatistics = apiStatistics.find((e) =>
      e.game.includes(changeInfo)
    );
    SetstatisticData(SearchGameStatistics);
  }, [changeInfo]);

  return statisticData
};
