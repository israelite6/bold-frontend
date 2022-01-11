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
