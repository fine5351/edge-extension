async function autoInteract() {

    // 找到收藏並左鍵點擊
    // await clickFavoriteButton();

    // 找到分享按鈕並左鍵點擊
    await clickShareButton();

}

// 確保 DOM 完全加載後才添加事件監聽器
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 已加載，事件監聽器已添加');
});

// 當按下 Q 時啟動自動互動
document.addEventListener('keydown', (event) => {
    if (event.key === 'q' || event.key === 'Q') {
        console.log('Q 鍵被按下');
        event.preventDefault(); // 防止默認行為
        autoInteract();
    }
});

async function clickFavoriteButton() {
    const favoriteButton = document.querySelector('div[title="收藏（E）"]');
    if (favoriteButton) {
        const leftClickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
            buttons: 1
        });
        favoriteButton.dispatchEvent(leftClickEvent);
        console.log('已左鍵點擊收藏按鈕');
        await sleep(1.5 * 1000);
    } else {
        console.log('未找到收藏按鈕');
        return;
    }

    // 找到預設收藏夾並左鍵點擊
    const defaultFavoriteSpan = Array.from(document.querySelectorAll('span')).find(span => span.title === '默认收藏夹');
    if (defaultFavoriteSpan) {
        const leftClickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
            buttons: 1
        });
        defaultFavoriteSpan.dispatchEvent(leftClickEvent);
        console.log('已左鍵點擊預設收藏夾');
        await sleep(1.5 * 1000);
    }
    else {
        console.log('未找到預設收藏夾');
        return;
    }

    // 找到文字為"確定"的按鈕並左鍵點擊
    const confirmButton = Array.from(document.querySelectorAll('button')).find(button =>
        button.textContent.trim() === '确定' && button.classList.contains('btn') && button.classList.contains('submit-move')
    );
    if (confirmButton) {
        const leftClickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
            buttons: 1
        });
        confirmButton.dispatchEvent(leftClickEvent);
        console.log('已左鍵點擊確定按鈕');
        await sleep(1.5 * 1000);
    }
    else {
        console.log('未找到確定按鈕');
        return;
    }
}

async function sleep(mills) {
    await new Promise(resolve => setTimeout(resolve, mills));
    console.log('已等待' + mills + '毫秒');
}

async function clickShareButton() {
    const shareButton = document.querySelector('div.video-share-wrap.video-toolbar-left-item');
    if (shareButton) {
        const leftClickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
            buttons: 1
        });
        shareButton.dispatchEvent(leftClickEvent);
        console.log('已左鍵點擊分享按鈕');
        await sleep(1.5 * 1000);
    }
    else {
        console.log('未找到分享按鈕');
        return;
    }

    // 找到文字為"動態"的div並左鍵點擊
    const dynamicDiv = Array.from(document.querySelectorAll('div')).find(div => div.textContent.trim() === '动态');
    if (dynamicDiv) {
        const leftClickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
            buttons: 1
        });
        dynamicDiv.dispatchEvent(leftClickEvent);
        console.log('已左鍵點擊動態按鈕');
        await sleep(1.5 * 1000);
    }
    else {
        console.log('未找到動態按鈕');
        return;
    }

    // 由於跨域問題，我們需要使用 content script 來與 iframe 通信
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'clickShareButton') {
            const publishButton = document.querySelector('button.share-btn.clickable');
            if (publishButton && publishButton.textContent.trim() === '发布') {
                publishButton.click();
                console.log('已點擊發布按鈕');
                sendResponse({ success: true });
            } else {
                console.log('未找到發布按鈕');
                sendResponse({ success: false });
            }
        }
    });

    await sleep(1.5 * 1000)
    const iframe = document.querySelector('iframe[name="dynmic-share"]');
    if (iframe) {
        console.log('iframe 已加載, iframe:', iframe);
    } else {
        console.log('未找到 iframe');
    }

}
