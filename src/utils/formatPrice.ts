export const formatPrice = (price: number) => {
  const priceToFixed = price.toFixed(2).replace(".", ",");
  return `R$ ${priceToFixed}`;
};
