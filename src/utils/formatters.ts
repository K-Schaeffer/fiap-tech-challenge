const MONTHS = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

export const formatMonth = (_date: string) => {
    const date = new Date(_date);
    const monthIndex = date.getMonth();
    return MONTHS[monthIndex];
};

export const formatDate = (_date: string) => {
    const date = new Date(_date);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export const formatCurrency = (value: number, currency: string) => {
    return `${currency} ${value.toFixed(2).replace(".", ",")}`;
}