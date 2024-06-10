const eventDate = new Date('2024-08-03')

function updateTimer() {
    const currentDate = new Date()
    const timeDifferent = eventDate.getTime() - currentDate.getTime()
  
    if (timeDifferent <= 0) {
      clearInterval(timerInterval)
      document.getElementById('timer').textContent = '0 дней, 0 часов, 0 минут';
      return
    }
  
    const days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDifferent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDifferent % (1000 * 60 * 60)) / (1000 * 60))
  
    document.getElementById('timer').innerHTML = `До начала события:<br>${days} дней, ${hours} часов, ${minutes} минут`
  }
  
const timerInterval = setInterval(updateTimer, 1000)