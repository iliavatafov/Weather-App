import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMetricsData } from "../store/weatherDataSlice";

export const useMetricsData = (units) => {
  const dispatch = useDispatch();
  const metricsData = useSelector((state) => state.weatherData.metricsData);

  useEffect(() => {
    if (units === "metric") {
      dispatch(
        setMetricsData({
          metricSymbol: "°C",
          windSpeedUnit: "m/s",
        })
      );
    } else {
      dispatch(
        setMetricsData({
          metricSymbol: "°F",
          windSpeedUnit: "mph",
        })
      );
    }
  }, [units, dispatch]);

  return metricsData;
};
