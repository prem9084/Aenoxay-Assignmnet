export const generateVerificationToken = () => {
  return Math.random().toString(36).substr(2);
};
