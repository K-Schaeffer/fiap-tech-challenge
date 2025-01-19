import { MONTHS } from "@/constants/months";

export const formatMonth = (_date: string) => {
  const date = new Date(_date);
  const monthIndex = date.getMonth();
  return MONTHS[monthIndex];
};

export const formatDate = (_date: string) => {
  const date = new Date(_date);
  return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} de ${formatMonth(_date)} ${date.getFullYear()}`;
};

export const getFormattedDateNow = () => {
  const date = new Date();
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatCurrency = (value: number, currency: string) => {
  return value < 0
    ? `-${currency} ${(Number(value) * -1)?.toFixed(2).replace(".", ",")}`
    : `${currency} ${Number(value)?.toFixed(2).replace(".", ",")}`;
};
