import { MenuItemType } from "./types";

export const MENU_ITEMS_DASHBOARD: MenuItemType[] = [
  {
    label: "Início",
    path: "/dashboard",
  },
  {
    label: "Transferências",
    path: "/transferencias",
  },
  {
    label: "Investimentos",
    path: "/investimentos",
  },
  {
    label: "Outros Serviços",
    path: "/outros-servicos",
  },
];

export const MENU_ITEMS_HOME: MenuItemType[] = [
  {
    label: "Sobre",
    path: "/sobre",
  },
  {
    label: "Serviços",
    path: "/servicos",
  },
];

export const TRANSACTION_TYPES = [
  "Depósito",
  "Saque",
  "Transferência",
  "Pagamento",
  "Investimento",
  "Empréstimo",
  "Financiamento",
  "Câmbio de moeda",
  "DOC/TED",
  "PIX",
];
