function myFunction(ev) {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const emails = localStorage.getItem("emails");
  if (emails) {
    const store = JSON.parse(emails);
    store.push({ nome, sobrenome, email });
    localStorage.setItem("emails", JSON.stringify(store));
    alert("Dados salvos com sucesso!");
    return;
  }
  localStorage.setItem("emails", JSON.stringify([{ nome, sobrenome, email }]));
  alert("Dados salvos com sucesso!");
}
