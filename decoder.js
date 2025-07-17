function handleDecode() {
  const fileInput = document.getElementById('fileInput');
  const output = document.getElementById('output');

  if (!fileInput.files.length) {
    output.textContent = 'Please upload a document.';
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const text = e.target.result;
    output.innerHTML = `<h3>Decoded Document:</h3><p>${simplifyText(text)}</p>`;
  };
  reader.readAsText(fileInput.files[0]);
}

function simplifyText(text) {
  return text.length > 300 ? text.slice(0, 300) + '... (summary coming soon)' : text;
}
