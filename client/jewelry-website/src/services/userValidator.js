export const validateUser = (fields) => {
  const { email, password } = fields;
  if (!email || !password) return "Invalid Fields";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return "Incorrect e-mail";

  return true;
};
