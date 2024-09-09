document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        alert(`You clicked on ${member.querySelector('h2').textContent}`);
    });
});