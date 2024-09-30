function getAcceleration(params) {
  if (
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
  if (n == Number.NaN ){
    return "impossible";
  }
  return a;
}
