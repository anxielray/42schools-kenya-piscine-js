function getAcceleration(params) {
//   if (
//     params == null ||
//     typeof params !== "object" ||
//     typeof params.m !== "number" ||
//     params.m <= 0
//   ) {
//     return "impossible";
//   }

  const accelerations = [];

  if (typeof params.f === "number") {
    const aFromForce = params.f / params.m;
    accelerations.push(aFromForce);
  }

  if (
    typeof params.Δv === "number" &&
    typeof params.Δt === "number" &&
    params.Δt > 0
  ) {
    const aFromDeltaV = params.Δv / params.Δt;
    // accelerations.push(aFromDeltaV);
    return aFromDeltaV
  }

  if (
    typeof params.d === "number" &&
    typeof params.t === "number" &&
    params.t > 0
  ) {
    const aFromDistance = (2 * params.d) / params.t ** 2;
    accelerations.push(aFromDistance);
  }

  if (accelerations.length === 0) {
    return "impossible";
  }

  return accelerations[0];
}

console.log(getAcceleration({ f: 10, m: 5 }));
console.log(getAcceleration({ Δv: 100, Δt: 50 }));
console.log(getAcceleration({ d: 10, t: 1, m: 5 }));
console.log(getAcceleration({ m: 5 }));
