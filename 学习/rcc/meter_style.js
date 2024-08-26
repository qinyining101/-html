let currentProgress = 0;
const interval = 100; // 更新间隔时间（毫秒）
const step = 1; // 每次增加的进度

function updateProgress() {
    currentProgress += step;
    if (currentProgress > 100) {
        currentProgress = 0;
    }

    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = `${currentProgress}%`;

    if (currentProgress <= 25) {
        progressFill.style.backgroundColor = 'red';
    } else if (currentProgress <= 50) {
        progressFill.style.backgroundColor = 'orange';
    } else if (currentProgress <= 75) {
        progressFill.style.backgroundColor = 'yellow';
    } else {
        progressFill.style.backgroundColor = 'green';
    }
}

setInterval(updateProgress, interval);
