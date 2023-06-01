const formatDate = (dateString: Date): string => {
  const date = new Date(dateString);
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

export default formatDate;
