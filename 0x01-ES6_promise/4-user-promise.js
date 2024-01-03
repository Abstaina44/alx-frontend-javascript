export default async function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const dict = {
      firstName,
      lastName,
    };
    resolve(dict);
  });
}
