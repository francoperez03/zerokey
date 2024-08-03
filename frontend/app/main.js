function display(container, msg) {
  const c = document.getElementById(container);
  const p = document.createElement('p');
  p.textContent = msg;
  c.appendChild(p);
}

document.getElementById('submitGuess').addEventListener('click', async () => {
  try {
    display('logs', 'Oh 💔 Wrong guess');
  } catch (err) {
    display('logs', 'Oh 💔 Wrong guess');
  }
});