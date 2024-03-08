export default function getInput(type, placeholder, idname) {
  const obj = { type: type, placeholder, id: idname, name: idname };
  return obj;
}
