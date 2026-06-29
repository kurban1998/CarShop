export async function getCars() {
  const response = await fetch('http://localhost:5025/api/cars');

  if (!response.ok) {
    throw new Error('Ошибка загрузки машин');
    
  }

  return await response.json();
}