const passwordDisplay = document.getElementById("passwordDisplay");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generateButton");
const copyBtn = document.getElementById("copyButton");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbersChars = "0123456789";
const symbolsChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Atualiza o valor do comprimento
lengthEl.addEventListener("input", () => {
  lengthValue.innerText = lengthEl.value;
});

// Gera a senha
generateBtn.addEventListener("click", () => {
  let password = "";
  let allowedChars = "";
  const length = lengthEl.value;

  if (uppercaseEl.checked) allowedChars += uppercaseChars;
  if (lowercaseEl.checked) allowedChars += lowercaseChars;
  if (numbersEl.checked) allowedChars += numbersChars;
  if (symbolsEl.checked) allowedChars += symbolsChars;

  // Se nenhuma opção estiver marcada, use apenas letras minúsculas como padrão
  if (allowedChars === "") {
    allowedChars = lowercaseChars;
    lowercaseEl.checked = true;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  // AQUI ESTÁ A CORREÇÃO! 👇
  // Use .textContent ou .innerText para atualizar o conteúdo de um div ou p.
  passwordDisplay.textContent = password;
});

// Copia a senha
copyBtn.addEventListener("click", () => {
  // Para copiar, você precisa pegar o texto com .textContent
  const password = passwordDisplay.textContent;
  if (password) {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Senha copiada para a área de transferência!");
      })
      .catch((err) => {
        console.error("Falha ao copiar: ", err);
      });
  }
});

// Geração inicial ao carregar a página
generateBtn.click();
