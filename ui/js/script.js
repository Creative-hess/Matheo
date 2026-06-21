let DISCORD_ID = null;

window.addEventListener('message', (event) => {
  let data = event.data;

  if (data.type === 'open') {
    showMenu();
    updateMenu(data.data);
  } else if (data.type === 'close') {
    hideMenu();
  } else if (data.type === 'update') {
    updateMenu(data.data);
  }
})

const updateMenu = (data) => {
  document.getElementById('player-name').innerText = data.playerName;
  document.getElementById('player-id-display').innerText = 'ID: ' + data.citizenId;
  
  // Job 1 with grade
  document.getElementById('job1name').innerText = data.playerJob || 'Aucun emploi';
  
  // Job 2 with grade
  if (data.playerJob2 && data.playerJob2 !== 'Unemployed - Unemployed' && data.playerJob2 !== 'Disoccupato - Disoccupato') {
    document.getElementById('job2name').innerText = data.playerJob2;
    document.getElementById('job2').style.display = 'flex';
  } else {
    document.getElementById('job2').style.display = 'none';
  }
  
  // Money
  document.getElementById('money-cash').innerText = '$' + (data.moneyCash || 0).toLocaleString();
  document.getElementById('money-bank').innerText = '$' + (data.moneyBank || 0).toLocaleString();
}

const hideMenu = () => {
  document.getElementById('page').style.display = 'none';
  document.getElementById('page').style.backgroundColor = 'transparent';
}

const showMenu = () => {
  document.getElementById('page').style.display = 'flex';
  document.getElementById('page').style.backgroundColor = 'rgba(17, 17, 17, 0.74)';
}

document.getElementById('settings-btn').addEventListener('click', () => {
  fetch(`https://KF_PauseMenu/settings`);
})

document.getElementById('discord-btn').addEventListener('click', () => {
  fetch(`https://KF_PauseMenu/discord`);
  window.invokeNative("openUrl", "https://discord.gg/cDP5NsEPKq");
})

document.getElementById('map-btn').addEventListener('click', () => {
  fetch(`https://KF_PauseMenu/map`);
})

document.getElementById('exit-btn').addEventListener('click', () => {
  fetch(`https://KF_PauseMenu/exit`);
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideMenu();
    fetch(`https://KF_PauseMenu/close`);
  }
})

document.addEventListener('DOMContentLoaded', () => {
  // Show menu by default for browser preview
  showMenu();
  // fetch(`https://KF_PauseMenu/ready`);
  getAvatar();
  
  // Add sample data for browser preview
  const sampleData = {
    playerName: 'Giuseppe Del Papa',
    playerJob: 'Polizia - Agente',
    playerJob2: 'Criminale - Boss',
    citizenId: 'KF12345',
    moneyCash: 15000,
    moneyBank: 50000
  };
  updateMenu(sampleData);
  
  // Update Paris time
  updateParisTime();
  setInterval(updateParisTime, 1000);
});

function updateParisTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('paris-time').innerText = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('menu-principal-btn').addEventListener('click', () => {
  fetch(`https://KF_PauseMenu/menuPrincipal`);
})

document.getElementById('discord-footer-btn').addEventListener('click', () => {
  window.invokeNative("openUrl", "https://discord.gg/cDP5NsEPKq");
})

async function getAvatar() {
  // Commented out for browser preview - use default avatar
  // fetch(`https://KF_PauseMenu/GetDiscordAvatar`).then((res) => {
  //   res.json().then((data) => {
  //     let avatar = data.avatar;
  //     DISCORD_ID = data.discord_id;

  //     if (avatar) {
  //       if (avatar.startsWith('a_')) {
  //         avatar = `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.avatar}.gif`;
  //       } else {
  //         avatar = `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.avatar}.png`;
  //       }
  //     } else {
  //       avatar = "images/guest.png";
  //     }
  //     document.getElementById('player-avatar').src = avatar;
  //   })
  // })
  
  // Use default avatar for browser preview
  document.getElementById('player-avatar').src = "images/guest.png";
}