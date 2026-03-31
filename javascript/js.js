
document.addEventListener('DOMContentLoaded', function(){

// титл

const openIntro = document.getElementById('openIntro');
const introPopup = document.getElementById('introPopup');
const closePopup = document.getElementById('closePopup');

openIntro.addEventListener('click', () => {
  introPopup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
  introPopup.classList.add('hidden');
});

introPopup.addEventListener('click', (e) => {
  if (e.target === introPopup) {
    introPopup.classList.add('hidden');
  }
});
// клик на морковку
// const morkov = document.querySelector('.morkov');
// const popup = document.getElementById('dishPopup');
// const popupText = document.getElementById('dishText');

// const morkovText = 'Овощи символизируют баланс и естественность. Лёгкие растительные ингредиенты уравновешивают насыщенные блюда, отражая философию Инь и Ян как гармонию противоположностей.';

// let typingInterval;
// let isOpen = false;

// function typeText(text, speed = 30) {
//   clearInterval(typingInterval);
//   popupText.textContent = '';
//   let i = 0;
//   typingInterval = setInterval(() => {
//     popupText.textContent += text[i];
//     i++;
//     if (i >= text.length) clearInterval(typingInterval);
//   }, speed);
// }

// morkov.addEventListener('click', (e) => {
//   e.stopPropagation();

//   if (isOpen) {
//     popup.classList.add('hidden');
//     clearInterval(typingInterval);
//     isOpen = false;
//     return;
//   }

//   popup.classList.remove('hidden');

//   const rect = morkov.getBoundingClientRect();
//   popup.style.top = (rect.top + window.scrollY - popup.offsetHeight - 16) + 'px';
//   popup.style.left = (rect.left + window.scrollX + rect.width / 2 - popup.offsetWidth / 2) + 'px';

//   typeText(morkovText);
//   isOpen = true;
// });

// document.addEventListener('click', () => {
//   if (isOpen) {
//     popup.classList.add('hidden');
//     clearInterval(typingInterval);
//     isOpen = false;
//   }
// });

// const morkov = document.querySelector(".morkov");
// const popup = document.getElementById("dishPopup");
// const text = document.getElementById("dishText");
// const dishTextSource = document.querySelector(".dish-text");

// morkov.addEventListener("click", function() {

//     morkov.classList.toggle("active");

//     if (popup.classList.contains("show")) {
//         popup.classList.remove("show");
//         popup.classList.add("hidden");
//     } else {
//         text.textContent = dishTextSource.textContent;
//         popup.classList.remove("hidden");
//         popup.classList.add("show");
//     }

// });

// клик на морковку
const morkov = document.querySelector(".morkov");
const popup = document.getElementById("dishPopup");
const text = document.getElementById("dishText");
const dishTextSource = document.querySelector(".dish-text");

let typingTimeout;
let isOpen = false;

function typeText(element, textContent, speed = 30) {
    clearTimeout(typingTimeout);
    element.textContent = "";
    let i = 0;

    function typing() {
        if (i < textContent.length) {
            element.textContent += textContent.charAt(i);
            i++;
            typingTimeout = setTimeout(typing, speed);
        }
    }

    typing();
}

morkov.addEventListener("click", function() {
    if (isOpen) {
        popup.classList.remove("show");
        popup.classList.add("hidden");
        text.textContent = "";
        clearTimeout(typingTimeout);
        isOpen = false;
        return;
    }

    const fullText = dishTextSource.textContent.trim();

    popup.classList.remove("hidden");
    popup.classList.add("show");

    typeText(text, fullText, 25);

    isOpen = true;
});



// попап чай

const openTea = document.getElementById('openTea');
const popuptea = document.getElementById('popuptea');
const closetea = document.getElementById('closetea');
const gametitle = document.getElementById('gametitle');

const leaves = document.querySelectorAll('.leaf');
const teapots = document.querySelectorAll('.teapot');

let dragged = null;
let count = 0;

openTea.addEventListener('click', () => {
  popuptea.classList.remove('hidden');
});

closetea.addEventListener('click', () => {
  popuptea.classList.add('hidden');
});

leaves.forEach((leaf) => {
  leaf.addEventListener('dragstart', () => {
    dragged = leaf;

    setTimeout(() => {
      leaf.style.opacity = '0.5';
    }, 0);
  });

  leaf.addEventListener('dragend', () => {
    leaf.style.opacity = '1';
  });
});

teapots.forEach((teapot) => {
  teapot.addEventListener('dragover', (e) => {
    e.preventDefault()
  });

  teapot.addEventListener('drop', (e) => {
    e.preventDefault();

    if (!dragged) return;

    const leafType = dragged.dataset.leaf;
    const zoneType = teapot.dataset.zone;

    if (leafType === zoneType) {
      dragged.style.left = teapot.style.left;
      dragged.style.top = teapot.style.top;
      dragged.style.width = '0%';
      dragged.draggable = false;
      dragged.style.pointerEvents = 'none';
      dragged.style.opacity = '1';

      count++;

      if (count === 3) {
        document.querySelectorAll('.leaf').forEach((el) => {
          el.classList.add('done');
        });

        document.querySelectorAll('.teapot').forEach((el) => {
          el.classList.add('done');
        });

        gametitle.innerHTML = 'Молодец!!!!';
        gametitle.classList.add('successText');
      }
    } else {
      dragged.classList.add('wrong');

      setTimeout(() => {
        dragged.classList.remove('wrong');
        dragged.style.opacity = '1';
      }, 300);
    }

    dragged = null;
  });
});

// клик на фонарик игра лови

// const openLovi = document.querySelector('.phonarik');
// const popupLovi = document.getElementById('popuplovi');
// const closeLovi = document.getElementById('closelovi');
// const loviRules = document.getElementById('lovirules');

// const poleLovli = document.getElementById('polelovli');
// const fallingLayer = document.getElementById('fallingLayer');
// const catcher = document.getElementById('catcher');
// const plusTen = document.getElementById('plusTen');
// const scoreDisplay = document.getElementById('scoreDisplay');

// const winOverlay = document.getElementById('winOverlay');
// const loseOverlay = document.getElementById('loseOverlay');
// const restartWin = document.getElementById('restartWin');
// const restartLose = document.getElementById('restartLose');

// const LOVI_WIN_SCORE = 100;
// const LOVI_MAX_MISSES = 3;


// let loviScore = 0;
// let loviMisses = 0;
// let loviGameActive = false;
// let loviAnimationId = null;
// let loviSpawnInterval = null;
// let fallingItems = [];

// const fallingSources = [
//   './img/phonarik2.svg',
//   './img/svitokgame.svg',
//   './img/phonarik.svg'
// ];

// function openLoviGame() {
//   popupLovi.classList.remove('hidden');
//   showLoviRules();
//   resetLoviGame();
// }

// function closeLoviGame() {
//   popupLovi.classList.add('hidden');
//   stopLoviGame();
//   hideLoviOverlays();
// }

// function showLoviRules() {
//   loviRules.classList.remove('hidden');
// }

// function hideLoviRules() {
//   loviRules.classList.add('hidden');
// }

// function hideLoviOverlays() {
//   winOverlay.classList.add('hidden');
//   loseOverlay.classList.add('hidden');
// }

// function resetLoviGame() {
//   stopLoviGame();
//   hideOverlays();

//   score = 0;
//   misses = 0;
//   scoreDisplay.textContent = '0';

//   fallinglayers.forEach(layer => {
//     if (layer.element && layer.element.parentNode) {
//       layer.element.remove();
//     }
//   });

//   fallingItems = [];
//   fallingLayer.innerHTML = '';
//   catcher.style.left = '50%';

//   plusTen.classList.add('hidden');
//   hideLoviOverlays();
// }

// function startLoviGame() {
//   if (loviGameActive) return;

//   loviGameActive = true;

//   loviSpawnInterval = setInterval(() => {
//     if (loviGameActive) {
//       createFallingItem();
//     }
//   }, 900);

//   updateLoviGame();
// }

// function stopLoviGame() {
//   loviGameActive = false;

//   if (loviSpawnInterval) {
//     clearInterval(loviSpawnInterval);
//     loviSpawnInterval = null;
//   }

//   if (loviAnimationId) {
//     cancelAnimationFrame(loviAnimationId);
//     loviAnimationId = null;
//   }
// }

// function createFallingItem() {
//   const item = document.createElement('img');
//   item.className = 'falling-item';
//   item.src = fallingSources[Math.floor(Math.random() * fallingSources.length)];
//   item.alt = 'item';

//   const x = Math.random() * 85 + 5;
//   const speed = Math.random() * 0.12 + 0.14;

//   item.style.left = x + '%';
//   item.style.top = '-8vw';

//   fallingLayer.appendChild(item);

//   fallingItems.push({
//     element: item,
//     yVw: -8,
//     speedVw: speed
//   });
// }

// function showPlusTenAtCatcher() {
//   const catcherRect = catcher.getBoundingClientRect();
//   const poleRect = poleLovli.getBoundingClientRect();

//   plusTen.classList.remove('hidden');

//   plusTen.style.left =
//     (catcherRect.left - poleRect.left + catcherRect.width * 0.62) + 'px';
//   plusTen.style.top =
//     (catcherRect.top - poleRect.top + catcherRect.height * 0.12) + 'px';

//   plusTen.classList.remove('plus-ten-anim');
//   void plusTen.offsetWidth;
//   plusTen.classList.add('plus-ten-anim');

//   setTimeout(() => {
//     plusTen.classList.add('hidden');
//   }, 700);
// }

// function getCatcherBox() {
//   const catcherRect = catcher.getBoundingClientRect();
//   const poleRect = poleLovli.getBoundingClientRect();

//   return {
//     left: catcherRect.left - poleRect.left + catcherRect.width * 0.22,
//     right: catcherRect.left - poleRect.left + catcherRect.width * 0.78,
//     top: catcherRect.top - poleRect.top + catcherRect.height * 0.38,
//     bottom: catcherRect.top - poleRect.top + catcherRect.height * 0.62
//   };
// }

// function updateLoviGame() {
//   if (!loviGameActive) return;

//   const poleRect = poleLovli.getBoundingClientRect();
//   const catcherBox = getCatcherBox();

//   for (let i = fallingItems.length - 1; i >= 0; i--) {
//     const itemData = fallingItems[i];

//     itemData.yVw += itemData.speedVw;
//     itemData.element.style.top = itemData.yVw + 'vw';

//     const itemRect = itemData.element.getBoundingClientRect();

//     const itemBox = {
//       left: itemRect.left - poleRect.left,
//       right: itemRect.right - poleRect.left,
//       top: itemRect.top - poleRect.top,
//       bottom: itemRect.bottom - poleRect.top
//     };

//     const caught =
//       itemBox.right > catcherBox.left &&
//       itemBox.left < catcherBox.right &&
//       itemBox.bottom > catcherBox.top &&
//       itemBox.top < catcherBox.bottom;

//     if (caught) {
//       loviScore += 10;
//       scoreDisplay.textContent = loviScore;
//       showPlusTenAtCatcher();

//       itemData.element.remove();
//       fallingItems.splice(i, 1);

//       if (loviScore >= LOVI_WIN_SCORE) {
//         stopLoviGame();
//         winOverlay.classList.remove('hidden');
//       }

//       continue;
//     }

//     if (itemBox.top > poleRect.height) {
//       itemData.element.remove();
//       fallingItems.splice(i, 1);

//       loviMisses += 1;

//       if (loviMisses >= LOVI_MAX_MISSES) {
//         stopLoviGame();
//         loseOverlay.classList.remove('hidden');
//       }
//     }
//   }

//   loviAnimationId = requestAnimationFrame(updateLoviGame);
// }

// poleLovli.addEventListener('mousemove', (e) => {
//   if (!loviGameActive) return;

//   const rect = poleLovli.getBoundingClientRect();
//   let x = e.clientX - rect.left;
//   let percent = (x / rect.width) * 100;

//   if (percent < 12) percent = 12;
//   if (percent > 88) percent = 88;

//   catcher.style.left = percent + '%';
// });

// openLovi.addEventListener('click', openLoviGame);
// closeLovi.addEventListener('click', closeLoviGame);

// loviRules.addEventListener('click', () => {
//   hideLoviRules();
//   resetLoviGame();
//   startLoviGame();
// });

// restartWin.addEventListener('click', () => {
//   hideLoviOverlays();
//   showLoviRules();
//   resetLoviGame();
// });

// restartLose.addEventListener('click', () => {
//   hideLoviOverlays();
//   showLoviRules();
//   resetLoviGame();
// });

// popupLovi.addEventListener('click', (e) => {
//   if (e.target === popupLovi) {
//     closeLoviGame();
//   }
// })

const openLoviButtons = document.querySelectorAll('.phonarik');
const popupLovi = document.getElementById('popuplovi');
const closeLovi = document.getElementById('closelovi');
const loviRules = document.getElementById('lovirules');

const poleLovli = document.getElementById('polelovli');
const fallingLayer = document.getElementById('fallingLayer');
const catcher = document.getElementById('catcher');
const plusTen = document.getElementById('plusTen');
const scoreDisplay = document.getElementById('scoreDisplay');

const winOverlay = document.getElementById('winOverlay');
const loseOverlay = document.getElementById('loseOverlay');
const restartWin = document.getElementById('restartWin');
const restartLose = document.getElementById('restartLose');

const WIN_SCORE = 100;
const MAX_MISSES = 3;

let score = 0;
let misses = 0;
let gameActive = false;
let animationId = null;
let spawnInterval = null;
let items = [];

const itemSources = [
  './img/phonarik2.svg',
  './img/svitokgame.svg',
   './img/phonarik.svg',
];

function openLoviGame() {
  popupLovi.classList.remove('hidden');
  resetLoviGame();
  loviRules.classList.remove('hidden');
}

function closeLoviGame() {
  popupLovi.classList.add('hidden');
  stopLoviGame();
  hideOverlays();
}

function hideOverlays() {
  winOverlay.classList.add('hidden');
  loseOverlay.classList.add('hidden');
}

function resetLoviGame() {
  stopLoviGame();
  hideOverlays();

  score = 0;
  misses = 0;
  scoreDisplay.textContent = '0';

  items.forEach(item => item.el.remove());
  items = [];
  fallingLayer.innerHTML = '';

  catcher.style.left = '50%';
  plusTen.classList.add('hidden');
}

function startLoviGame() {
  if (gameActive) return;

  gameActive = true;

  spawnInterval = setInterval(() => {
    createItem();
  }, 700);

  updateGame();
}

function stopLoviGame() {
  gameActive = false;

  if (spawnInterval) {
    clearInterval(spawnInterval);
    spawnInterval = null;
  }

  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

function createItem() {
  if (!gameActive) return;

  const el = document.createElement('img');
  el.className = 'falling-item';
  el.src = itemSources[Math.floor(Math.random() * itemSources.length)];

  const startLeft = Math.random() * 90;
  const speed = 0.22 + Math.random() * 0.16;

  el.style.left = startLeft + '%';
  el.style.top = '-6vw';

  fallingLayer.appendChild(el);

  items.push({
    el: el,
    y: -6,
    speed: speed
  });
}

function showPlusTen() {
  const catcherRect = catcher.getBoundingClientRect();
  const fieldRect = poleLovli.getBoundingClientRect();

  plusTen.classList.remove('hidden');
  plusTen.style.left = (catcherRect.left - fieldRect.left + catcherRect.width * 0.62) + 'px';
  plusTen.style.top = (catcherRect.top - fieldRect.top + catcherRect.height * 0.05) + 'px';

  plusTen.classList.remove('plus-ten-anim');
  void plusTen.offsetWidth;
  plusTen.classList.add('plus-ten-anim');

  setTimeout(() => {
    plusTen.classList.add('hidden');
  }, 650);
}

function getCatchBox() {
  const catcherRect = catcher.getBoundingClientRect();
  const fieldRect = poleLovli.getBoundingClientRect();

  return {
    left: catcherRect.left - fieldRect.left + catcherRect.width * 0.28,
    right: catcherRect.left - fieldRect.left + catcherRect.width * 0.72,
    top: catcherRect.top - fieldRect.top + catcherRect.height * 0.38,
    bottom: catcherRect.top - fieldRect.top + catcherRect.height * 0.60
  };
}

function updateGame() {
  if (!gameActive) return;

  const fieldRect = poleLovli.getBoundingClientRect();
  const catchBox = getCatchBox();

  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];
    item.y += item.speed;
    item.el.style.top = item.y + 'vw';

    const rect = item.el.getBoundingClientRect();

    const itemBox = {
      left: rect.left - fieldRect.left,
      right: rect.right - fieldRect.left,
      top: rect.top - fieldRect.top,
      bottom: rect.bottom - fieldRect.top
    };

    const caught =
      itemBox.right > catchBox.left &&
      itemBox.left < catchBox.right &&
      itemBox.bottom > catchBox.top &&
      itemBox.top < catchBox.bottom;

    if (caught) {
      score += 10;
      scoreDisplay.textContent = score;
      showPlusTen();

      item.el.remove();
      items.splice(i, 1);

      if (score >= WIN_SCORE) {
        stopLoviGame();
        winOverlay.classList.remove('hidden');
      }

      continue;
    }

    if (itemBox.top > fieldRect.height) {
      item.el.remove();
      items.splice(i, 1);
      misses++;

      if (misses >= MAX_MISSES) {
        stopLoviGame();
        loseOverlay.classList.remove('hidden');
      }
    }
  }

  animationId = requestAnimationFrame(updateGame);
}

poleLovli.addEventListener('mousemove', (e) => {
  if (!gameActive) return;

  const rect = poleLovli.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let percent = (x / rect.width) * 100;

  if (percent < 12) percent = 12;
  if (percent > 88) percent = 88;

  catcher.style.left = percent + '%';
});

openLoviButtons.forEach(btn => {
  btn.addEventListener('click', openLoviGame);
});

closeLovi.addEventListener('click', closeLoviGame);

loviRules.addEventListener('click', () => {
  loviRules.classList.add('hidden');
  startLoviGame();
});

restartWin.addEventListener('click', () => {
  closeLoviGame(); // закрывает попап, возвращает к плакату
});

restartLose.addEventListener('click', () => {
  resetLoviGame();
  loviRules.classList.remove('hidden'); // показывает правила — игра заново
});

popupLovi.addEventListener('click', (e) => {
  if (e.target === popupLovi) {
    closeLoviGame();
  }
});

// клик на панду слева игра дракон



const openDragon = document.getElementById('openDragon');
const popupDragon = document.getElementById('popupdragon');
const closeDragon = document.getElementById('closedragon');
const dragonRules = document.getElementById('dragonrules');
const dragonBoard = document.getElementById('dragonboard');
const dragonWin = document.getElementById('dragonwin');
const restartDragon = document.getElementById('restartDragon');

const DRAGON_SIZE = 4;
let dragonTiles = [];
let emptyIndex = 0;

function createSolvedDragonTiles() {
  return [
    null, 0, 1, 2,
    3, 4, 5, 6,
    7, 8, 9, 10,
    11, 12, 13, 14
  ];
}

function getDragonNeighbors(index) {
  const neighbors = [];
  const row = Math.floor(index / DRAGON_SIZE);
  const col = index % DRAGON_SIZE;

  if (row > 0) neighbors.push(index - DRAGON_SIZE);
  if (row < DRAGON_SIZE - 1) neighbors.push(index + DRAGON_SIZE);
  if (col > 0) neighbors.push(index - 1);
  if (col < DRAGON_SIZE - 1) neighbors.push(index + 1);

  return neighbors;
}

function isDragonAdjacent(a, b) {
  const rowA = Math.floor(a / DRAGON_SIZE);
  const colA = a % DRAGON_SIZE;
  const rowB = Math.floor(b / DRAGON_SIZE);
  const colB = b % DRAGON_SIZE;

  const sameRow = rowA === rowB && Math.abs(colA - colB) === 1;
  const sameCol = colA === colB && Math.abs(rowA - rowB) === 1;

  return sameRow || sameCol;
}

function checkDragonWin() {
 const solved = [
    null, 0, 1, 2,
    3, 4, 5, 6,
    7, 8, 9, 10,
    11, 12, 13, 14
  ];

  for (let i = 0; i < solved.length; i++) {
    if (dragonTiles[i] !== solved[i]) return false;
  }

  return true;
}

function renderDragonBoard() {
  dragonBoard.innerHTML = '';

  dragonTiles.forEach((value, index) => {
    const tile = document.createElement('div');
    tile.classList.add('dragontile');

    if (value === null) {
      tile.classList.add('empty');
    } else {
      const img = document.createElement('img');
      img.src = `./img/dragontile${value + 1}.png`;
      img.alt = `tile ${value + 1}`;
      tile.appendChild(img);

      tile.addEventListener('click', () => {
        moveDragonTile(index);
      });
    }

    dragonBoard.appendChild(tile);
  });
}

function moveDragonTile(index) {
  if (!isDragonAdjacent(index, emptyIndex)) return;

  [dragonTiles[index], dragonTiles[emptyIndex]] = [dragonTiles[emptyIndex], dragonTiles[index]];
  emptyIndex = index;

  renderDragonBoard();

  if (checkDragonWin()) {
    dragonWin.classList.remove('hidden');
  }
}

function shuffleDragonBoard() {
  let shuffleMoves = 120;
  let currentEmpty = emptyIndex;

  while (shuffleMoves > 0) {
    const neighbors = getDragonNeighbors(currentEmpty);
    const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];

    [dragonTiles[randomNeighbor], dragonTiles[currentEmpty]] = [dragonTiles[currentEmpty], dragonTiles[randomNeighbor]];
    currentEmpty = randomNeighbor;
    shuffleMoves--;
  }

  emptyIndex = currentEmpty;

  if (checkDragonWin()) {
    shuffleDragonBoard();
  }
}

function resetDragonGame() {
  dragonTiles = createSolvedDragonTiles();
  emptyIndex = 0;
  dragonWin.classList.add('hidden');
  shuffleDragonBoard();
  renderDragonBoard();
}

function openDragonGame() {
  popupDragon.classList.remove('hidden');
  dragonRules.classList.remove('hidden');
  resetDragonGame();
}

function closeDragonGame() {
  popupDragon.classList.add('hidden');
  dragonWin.classList.add('hidden');
}

openDragon.addEventListener('click', openDragonGame);

closeDragon.addEventListener('click', closeDragonGame);

dragonRules.addEventListener('click', () => {
  dragonRules.classList.add('hidden');
});

restartDragon.addEventListener('click', () => {
  dragonWin.classList.add('hidden');
  dragonRules.classList.remove('hidden');
  resetDragonGame();
});

popupDragon.addEventListener('click', (e) => {
  if (e.target === popupDragon) {
    closeDragonGame();
  }
});


// клик на панду художника открытие веера

const openVeer = document.getElementById('openFan');
const popupVeer = document.getElementById('popupveer');
const closeVeer = document.getElementById('closeveer');
const veerRules = document.getElementById('veerrules');
const veerUnderstand = document.getElementById('veerUnderstand');
const clearVeer = document.getElementById('clearveer');

const veerCanvas = document.getElementById('veercanvas');
const veerCtx = veerCanvas.getContext('2d');
const whiteVeerImg = document.getElementById('whiteveerimg');

let isDrawingVeer = false;
let canDrawVeer = false;
let veerMaskReady = false;
let veerAlphaData = null;

function openVeerPopup() {
  popupVeer.classList.remove('hidden');
  veerRules.classList.remove('hidden');
  canDrawVeer = false;
  isDrawingVeer = false;
  veerCanvas.style.cursor = 'default';
}

function closeVeerPopup() {
  popupVeer.classList.add('hidden');
  veerRules.classList.remove('hidden');
  canDrawVeer = false;
  isDrawingVeer = false;
  veerCanvas.style.cursor = 'default';
}

function clearVeerCanvas() {
  veerCtx.clearRect(0, 0, veerCanvas.width, veerCanvas.height);
}

function getVeerCanvasPos(e) {
  const rect = veerCanvas.getBoundingClientRect();
  const scaleX = veerCanvas.width / rect.width;
  const scaleY = veerCanvas.height / rect.height;
  return {
    x: Math.round((e.clientX - rect.left) * scaleX),
    y: Math.round((e.clientY - rect.top) * scaleY)
  };
}

function prepareVeerMask() {
  const img = whiteVeerImg;

  function buildMask() {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = veerCanvas.width;
    tempCanvas.height = veerCanvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
    veerAlphaData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data;
    veerMaskReady = true;
  }

  if (img.complete && img.naturalWidth > 0) {
    buildMask();
  } else {
    img.onload = buildMask;
  }
}

function isInsideVeer(x, y) {
  if (!veerMaskReady || !veerAlphaData) return true; // если маска не готова — разрешаем рисовать везде
  if (x < 0 || y < 0 || x >= veerCanvas.width || y >= veerCanvas.height) return false;
  const alphaIndex = (y * veerCanvas.width + x) * 4 + 3;
  return veerAlphaData[alphaIndex] > 20;
}

function startVeerDrawing(e) {
  if (!canDrawVeer) return;
  const pos = getVeerCanvasPos(e);
  isDrawingVeer = true;
  veerCtx.beginPath();
  veerCtx.moveTo(pos.x, pos.y);
}

function drawOnVeer(e) {
  if (!isDrawingVeer || !canDrawVeer) return;
  const pos = getVeerCanvasPos(e);

  if (!isInsideVeer(pos.x, pos.y)) {
    veerCtx.stroke();
    veerCtx.beginPath();
    isDrawingVeer = false;
    return;
  }

  veerCtx.lineTo(pos.x, pos.y);
  veerCtx.strokeStyle = '#c0392b';
  veerCtx.lineWidth = 4;
  veerCtx.lineCap = 'round';
  veerCtx.lineJoin = 'round';
  veerCtx.stroke();
  veerCtx.beginPath();
  veerCtx.moveTo(pos.x, pos.y);
}

function stopVeerDrawing() {
  if (!isDrawingVeer) return;
  isDrawingVeer = false;
  veerCtx.closePath();
}

// события
openVeer.addEventListener('click', openVeerPopup);
closeVeer.addEventListener('click', closeVeerPopup);

veerUnderstand.addEventListener('click', () => {
  veerRules.classList.add('hidden');
  canDrawVeer = true;
  prepareVeerMask();
  veerCanvas.style.cursor = 'crosshair'; // если brush.png не работает — оставь crosshair
});

clearVeer.addEventListener('click', clearVeerCanvas);

veerCanvas.addEventListener('mousedown', startVeerDrawing);
veerCanvas.addEventListener('mousemove', drawOnVeer);
veerCanvas.addEventListener('mouseup', stopVeerDrawing);
veerCanvas.addEventListener('mouseleave', stopVeerDrawing);

popupVeer.addEventListener('click', (e) => {
  if (e.target === popupVeer) closeVeerPopup();
});

// панды на карточках
// const trenPandas = document.querySelectorAll('.trenpanda');

// function showRandomPanda() {
  
//   trenPandas.forEach(p => p.classList.remove('visible'));

 
//   const rand = Math.floor(Math.random() * trenPandas.length);
//   trenPandas[rand].classList.add('visible');

  
//   const delay = 1500 + Math.random() * 2000;
//   setTimeout(showRandomPanda, delay);
// }


// showRandomPanda();

});