export function BankList({
  title,
  bankName,
  logoName,
  setSelectBank,
  selectBank,
}) {
  const regionBankName = Object.keys(bankName);

  function onClick(id) {
    setSelectBank(
      selectBank.includes(id)
        ? selectBank.filter((el) => el !== id)
        : [...selectBank, id]
    );
  }
  return (
    <section className="regionBankSection">
      <h2 className="regionBankTitle">{title}</h2>
      <ul className="regionBankList">
        {regionBankName.map((el) => (
          <li
            style={
              selectBank.includes(el)
                ? { backgroundColor: "#eeeeee", borderRadius: 16 }
                : { backgroundColor: "#ffffff" }
            }
            onClick={() => onClick(el)}
            key={el}
            className="regionBankItem"
          >
            <img className="regionBankImg" src={logoName[el]} alt="svg" />
            <p className="regionBankText">{bankName[el]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
