$(function() {
  $('.code-snippet-container').each((_index, e) => {
    const blockButton = e.children[0];

    blockButton.addEventListener('click', () => {
      copyToClipboard(e);
    });
  });

  function copyToClipboard(e) {
    const temp = $('<textarea>');
    $('body').append(temp);

    const text = cleanCopyText($(e).text())
    temp.val(text).select();
    document.execCommand('copy');

    temp.remove();
  }

  function cleanCopyText(text) {
    return text.trim().replace(/[ ]{8}/g, ''.replace(/[ ]{2}/g, ' ')).replace(/[ ]{2}/g, ' ').replace(/[ ]{3}/g, '  ').replace(/[ ]{3}/g, '  ');
  }
})