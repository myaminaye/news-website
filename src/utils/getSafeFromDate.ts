export const getSafeFromDate = () => {
  const today = new Date();
  today.setDate(today.getDate() - 5); // go back 5 days max
  return today.toISOString().split("T")[0];
};
