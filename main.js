// DOM Extraction
const notificationCount = document.getElementById("notification-count")
const markAll = document.getElementById('mark-all');
const unread = document.querySelectorAll('.unread');


notificationCount.textContent = unread.length

// Select each Unreadmessage
unread.forEach(message => {
    // Unread Event Listener
    message.addEventListener('click', () => {
        // REmove the unread class
        message.classList.remove('unread');

    // CReate a new unread message variable that matches wity new notification count
    const newUnreadMessage = document.querySelectorAll('.unread');
    notificationCount.textContent = newUnreadMessage.length
  })
})

// Markall
markAll.addEventListener('click', () => {
    unread.forEach(message => {
        message.classList.remove('unread')
    })
    // CReate a new unread message variable that matches wity new notification count
    const newUnreadMessage = document.querySelectorAll('.unread')
    notificationCount.textContent = newUnreadMessage.length
})
