export type FormData = {
  personOrCompanyName: string;
  cardTitle: string;
  cardMessage: string;
  selectedGiftAmount: number;
  giftsNumber: number;
  referralCode: string;
  totalAmount: number;
};

export interface CustomisationFormProps {
  selectedCardTitle: string;
  selectedCardMessage: string;
  setSelectedCardTitle: (title: string) => void;
  setSelectedCardMessage: (message: string) => void;
}
