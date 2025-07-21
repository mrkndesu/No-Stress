document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#hitButton');
    const counterText = document.querySelector('#counter');
    const sounds = Array.from(document.querySelectorAll('.villager-sound'));
    const errorLog = document.querySelector('#errorLog');

    let count = 0;

    // スマホ、音声流れない対策
    button.addEventListener('touchstart', () => {
        sounds.forEach((audio) => {
            audio.muted = true;
            audio.play().then(() => {
                audio.pause();
                audio.currentTime = 0;
                audio.muted = false;
            }).catch(() => {});
        });
    }, { once: true });


    button.addEventListener('click', () => {
        // ランダムに音声流れる
        const index = Math.floor(Math.random() * sounds.length);
        const audio = sounds[index];

        audio.pause();
        audio.currentTime = 0;
        audio.play().catch((error) => {
            errorLog.textContent = '再生に失敗: ' + error.message;
        });

        // カウント更新
        count++;
        counterText.textContent = `叩いた回数: ${count}`;
    });
});
