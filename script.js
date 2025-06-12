 const btn =  document.querySelector('.toggle');
 const sidebar = document.querySelector('.sidebar')
 const content = document.querySelector('.content')
 const background = document.querySelector('.background')

 btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    btn.classList.toggle('active');
    content.classList.toggle('active');
    background.classList.toggle('active');

    document.body.style.backgroundColor = sidebar.classList.contains('active') ? '#34495e' : '#ecf0f1';
})

background.addEventListener('click', () => {
    sidebar.classList.remove('active');
    btn.classList.remove('active');
    content.classList.remove('active');
    background.classList.remove('active');
     document.body.style.backgroundColor = '#ecf0f1';
})