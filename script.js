document.addEventListener('DOMContentLoaded', () => {
    const sounds = Array.from(document.querySelectorAll('.villager-sound'));
    const button = document.querySelector('#hitButton');
    const counterText = document.querySelector('#counter');
    const errorLog = document.querySelector('#errorLog');
    let count = 0;
    let initialized = false;

    // 明示的に音声を事前ロード
    sounds.forEach(audio => audio.load());

    button.addEventListener('click', async () => {
        // iOSの初回制限対策
        if (!initialized) {
            for (const audio of sounds) {
                try {
                    audio.volume = 0;
                    await audio.play();
                    audio.pause();
                    audio.currentTime = 0;
                    audio.volume = 1.0;
                } catch (e) {
                    console.log('iOS初期化スキップ:', e.message);
                }
            }
            initialized = true;
        }

        // 通常の再生処理
        const index = Math.floor(Math.random() * sounds.length);
        const audio = sounds[index];

        try {
            audio.pause();
            audio.currentTime = 0;
            await audio.play();
        } catch (error) {
            errorLog.textContent = '再生に失敗: ' + error.message;
        }

        // カウント更新
        count++;
        counterText.textContent = `叩いた回数: ${count}`;
    });
});