export const getErrorMessage = (statusCode) => {
  let errorMessage = "";

  switch (statusCode) {
    case 400:
      errorMessage = "Bad request. Please check your input.";
      break;
    case 401:
      errorMessage = "Unauthorized. API key is invalid.";
      break;
    case 404:
      errorMessage = "City not found. Please check the city name.";
      break;
    case 429:
      errorMessage = "Too many requests. Please try again later.";
      break;
    default:
      errorMessage = "Server error. Please try again later.";
      break;
  }

  return errorMessage;
};

export const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
};

export const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
};

export const filterUniqueDays = (weatherData) => {
  const daysMap = {};

  const firstItemHour = new Date(weatherData.list[0].dt_txt).getHours();

  weatherData.list.forEach((item) => {
    const date = new Date(item.dt_txt);
    const day = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    if (date.getHours() === firstItemHour) {
      if (!daysMap[day]) {
        daysMap[day] = item;
      }
    }
  });

  weatherData.list = Object.values(daysMap).slice(0, 5);

  return weatherData;
};
