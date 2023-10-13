const menu = document.getElementById('menu');
const menuItems = document.getElementById('menuItems');
menuItems.classList.toggle('hidden');
menu.addEventListener('click', function(evt) {
    menuItems.classList.toggle('hidden');
});

if (localStorage.getItem('theme')) {
    document.documentElement.classList.add('dark');
}
const toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
});