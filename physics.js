function getAcceleration(params) {
  if (
    params == null ||
    params.length == 0 ||
    params.m == null ||
    params.f == null ||
    params.Δv == null ||
    params.Δt == null ||
    params.t == null ||
    params.d == null ||
    typeof params.m !== "number" ||
    typeof params.f !== "number" ||
    typeof params.Δv !== "number" ||
    typeof params.Δt !== "number" ||
    params.t <= 0 ||
    params.d <= 0 ||
    params.m <= 0 ||
    params.f <= 0 ||
    params.Δv <= 0 ||
    params.Δt <= 0 ||
    params.t <= 0 ||
    params.d <= 0
  ) {
    return "impossible";
  }

  const a = params.f / params.m;
  return a;
}
