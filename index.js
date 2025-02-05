  // Kart elementini yaradan funksiya. Bu funksiyanı api-dən çəkdiyiniz data-ları göstərmək üçün istifadə edə bilərsiniz.
function createTodoCard(todo) {
    // Kart üçün əsas div elementini yaradın və Tailwind CSS sinifləri əlavə edin
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded shadow';
  
    // 1. Todo ID-ni göstərən element
    const idEl = document.createElement('p');
    idEl.className = 'text-sm text-gray-500';
    idEl.textContent = `ID: ${todo.id}`;
    card.appendChild(idEl);
  
    // 2. Todo mətnini göstərən element
    const textEl = document.createElement('p');
    textEl.className = 'text-lg font-semibold mb-2';
    textEl.textContent = todo.todo;
    card.appendChild(textEl);
  
    // 3. Todo-nun tamamlanma vəziyyətini göstərən element
    const statusEl = document.createElement('p');
    statusEl.className = 'text-sm mb-2';
    // Əgər todo tamamlanıbsa "Tamamlanıb", əks halda "Tamamlanmayıb" yazılır
    statusEl.textContent = todo.completed ? 'Tamamlanıb' : 'Tamamlanmayıb';
    card.appendChild(statusEl);
  
    // 4. İstifadəçi ID-ni göstərən element (əgər mövcuddursa)
    const userEl = document.createElement('p');
    userEl.className = 'text-sm text-gray-600';
    userEl.textContent = `İstifadəçi ID: ${todo.userId}`;
    card.appendChild(userEl);
  
    // Yaradılmış kart elementi geri qaytarılır
    return card;
  }
  