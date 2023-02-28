export default function formattedCurrency(price) {
  const formattedValued = Number(price).toLocaleString('th-TH', {
    style: 'decimal',
    currency: 'THB',
    minimumFractionDigits: 0
  });
  return formattedValued;
}
