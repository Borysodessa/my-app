export function BankList({ title, bankName, logoName }) {
  const regionBankName = Object.keys(bankName);

  return (
    <section className="regionBankSection">
      <h2 className="regionBankTitle">{title}</h2>
      <ul className="regionBankList">
        {regionBankName.map((el) => (
          <li
            key={el}
            className="regionBankItem"
            style={
              el === "rosbankDom" || el === "open"
                ? { backgroundColor: "#eeeeee", borderRadius: 16 }
                : { backgroundColor: "#ffffff" }
            }
          >
            <img className="regionBankImg" src={logoName[el]} alt="svg" />
            <p className="regionBankText">{bankName[el]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
