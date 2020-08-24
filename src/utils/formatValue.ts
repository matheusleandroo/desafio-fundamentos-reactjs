const formatValue = (value: number): string => {
  const valueFormated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return valueFormated;
};

export default formatValue;
