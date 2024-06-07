export function getEmailDomain(email: string) {
  const regex = /(?<=@)[\w.-]+/;

  const result = email.match(regex);

  return result ? result[0] : null;
}
