export async function getCars() {
  const response = await fetch('http://localhost:5025/api/cars');

  if (!response.ok) {
    throw new Error('Ошибка загрузки машин');
  }

  await delay(1500);

  return await response.json();
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}