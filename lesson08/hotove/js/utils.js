function fullName(first, last) {
  return capitalizeSentence(first) + ' ' + capitalizeSentence(last);
}

function capitalize(txt) {
  return txt[0].toUpperCase() + txt.substring(1);
}

function capitalizeSentence(txt) {
  const parts = txt.split(' ');
  let out = capitalize(parts[0]);

  for (i = 1; i < parts.length; i++) {
    out = out + ' ' + capitalize(parts[i]);
  }

  return out;
}
