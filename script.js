document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#hitButton');
    const counterText = document.querySelector('#counter');
    const sounds = Array.from(document.querySelectorAll('.villager-sound'));

    let count = 0;

    button.addEventListener('click', () => {
    // ランダム音声再生
    const index = Math.floor(Math.random() * sounds.length);
    const audio = sounds[index];
    audio.pause();
    audio.currentTime = 0;
    audio.play();

    // カウンター更新
    count++;
    counterText.textContent = `叩いた回数: ${count}`;
    });
});
