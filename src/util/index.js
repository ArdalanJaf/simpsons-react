export function joiDataReorder(details) {
  const errorsMod = {};
  details.forEach((error) => {
    errorsMod[error.context.key] = error.message;
  });

  for (let error in errorsMod) {
    if (errorsMod[error].includes("9", -1)) {
      errorsMod[error] = "No Numbers!!";
    }
  }

  return errorsMod;
}
