document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#hitButton');
    const counterText = document.querySelector('#counter');
    const sounds = Array.from(document.querySelectorAll('.villager-sound'));
    const errorLog = document.querySelector('#errorLog');

    let count = 0;

    button.addEventListener('click', () => {
    // ランダムに音声を選択
        const index = Math.floor(Math.random() * sounds.length);
        const audio = sounds[index];

        // iOSなどで安定再生するための処理
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
