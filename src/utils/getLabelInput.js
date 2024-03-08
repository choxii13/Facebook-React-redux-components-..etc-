export default function getLabelInput(type, idval, label, name) {
  const obj = {
    type: type,
    value: idval,
    id: idval,
    label: label,
    name: name,
  };

  return obj;
}
