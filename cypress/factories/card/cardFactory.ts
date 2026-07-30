import { faker } from "@faker-js/faker";
import { cardData } from "../../interface/card/cardData";

export function validCard(overrides: Partial<cardData> = {}): cardData {
  return {
    nameCard: faker.person.fullName(),
    numberCard: faker.finance.creditCardNumber(),
    cvcCard: faker.finance.creditCardCVV(),
    expirationMonthCard: 12,
    expirationYearCard: 2030,
    ...overrides,
  };
}
