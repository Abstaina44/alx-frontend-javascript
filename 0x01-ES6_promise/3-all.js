import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const results = await Promise.all([uploadPhoto(), createUser()]);
    const values = [];
    for (const item of results) {
      for (const [key, value] of Object.entries(item)) {
        if (key === 'firstName' || key === 'lastName' || key === 'body') {
          values.push(value);
        }
      }
    }
    console.log(values.join(' '));
  } catch (error) {
    console.log('Signup system offline');
  }
}
