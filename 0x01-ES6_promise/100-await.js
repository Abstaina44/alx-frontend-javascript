import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const object = {};
  try {
    object.photo = await uploadPhoto();
    object.user = await createUser();
  } catch (error) {
    object.photo = null;
    object.user = null;
  }
  return object;
}
