export function multiple(v) {
  return v ** v;
}

export function concat(params) {
  let concat = "";
  params.forEach((e) => {
    concat += e;
  });
  return concat;
}
