export default async function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const dict = {
        status: 200,
        body: 'Success',
      };
      resolve(dict);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
