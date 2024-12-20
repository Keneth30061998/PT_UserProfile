export const fetchRandomUser = async () => {
  const response = await fetch('https://randomuser.me/api/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
