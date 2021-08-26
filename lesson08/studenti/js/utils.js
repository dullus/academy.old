function fullName(first, last) {
  return capitalizeSentence(first) + ' ' + capitalizeSentence(last);
}

function capitalize(txt) {
  if (txt) {
    return txt[0].toUpperCase() + txt.substring(1);
  }
  return '';
}

function capitalizeSentence(txt) {
  const words = txt.trim().split(' ');
  let out = capitalize(words[0]);

  for (i = 1; i < words.length; i++) {
    out = out + ' ' + capitalize(words[i]);
  }

  return out;
}