export function FormatRate({ formatRate }) {
  return (formatRate * 100).toFixed(1) + "%";
}

export function FormatMaxAmount({ formatMaxAmount }) {
  return (formatMaxAmount / 1000000).toFixed(1) + " млн" + " ₽";
}

export function FormatMinInitialPayment({ formatMinInitialPayment }) {
  return (formatMinInitialPayment * 100).toFixed(1) + "%";
}
