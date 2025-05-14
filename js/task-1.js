document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.card');
  
  console.log(`Number of categories: ${categories.length}`);

  categories.forEach(category => {
    const title = category.querySelector('.card-title').textContent;
    const items = category.querySelectorAll('.card-item');
    
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items.length}`);
  });
});