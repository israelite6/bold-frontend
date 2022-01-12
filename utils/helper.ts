export const getIsTouched = (touched: any, name: string): boolean => {
  if (touched && touched[name]) {
    return true;
  }

  return false;
};
export const getIsErrored = (errors: any, name: string): boolean | string => {
  if (errors && errors[name]) {
    return errors[name];
  }

  return false;
};

export const getCurrencyFormat = (amount: number) => {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const calculatePaginationButton = (
  total: number,
  perPage: number
): number[] => {
  const buttonNumber = Math.ceil(total / perPage);
  const buttons = [];
  for (let i = 0; i < buttonNumber; i++) {
    buttons.push(i + 1);
  }
  return buttons;
};
