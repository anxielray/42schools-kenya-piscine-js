function getAcceleration(params) {
  if (
    params == null ||
    params.length == 0 ||
    params.m == null ||
    params.f == null ||
    typeof params.m !== "number" ||
    typeof params.f !== "number" ||
    params.f <= 0
  ) {
    return "impossible";
  }

  const a = params.f / params.m;
  return a;
}

console.log(getAcceleration({ Δv: 100, Δt: 50 }));
