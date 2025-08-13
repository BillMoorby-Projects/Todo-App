const todo_list = [
  {
    name: 'make dinner', 
    due_date: '2025-07-30'
  }, 
  {
    name: 'do laundry', 
    due_date: '2025-07-31'
  }
];

render_todo_list();

function render_todo_list() {
  let todo_list_html = '';

  todo_list.forEach((todo_object, index) => {
    const { name, due_date } = todo_object;

    const html = `
      <div>${name}</div>

      <div>${due_date}</div>

      <button class="delete_todo_button js_delete_todo_button">
        Delete
      </button>
    `;
    todo_list_html += html;
  });

  document.querySelector('.js_todo_list')
  .innerHTML = todo_list_html;

  
  document.querySelectorAll('.js_delete_todo_button')
    .forEach((delete_button, index) => {
      delete_button.addEventListener('click', () => {
        todo_list.splice(index, 1);
        render_todo_list();
      });
    });
  
  };

  document.querySelector('.js_add_todo_button')
    .addEventListener('click', () => {
      add_todo();
    });


function add_todo() {
  const input_element = document.querySelector('.js_name_input');
  const name = input_element.value;
  const date_input_element = document.querySelector('.js_due_date_input');
  const due_date = date_input_element.value;

  todo_list.push(
    {
      name, 
      due_date
    }
  );

  input_element.value = '';

  render_todo_list();
}
