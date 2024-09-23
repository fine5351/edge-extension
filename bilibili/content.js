function autoInteract() {
  // 使用Q點讚
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'q', keyCode: 81 }));

  // 按下E收藏
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'e', keyCode: 69 }));
  // 找到預設收藏夾並右鍵點擊
  setTimeout(() => {
    const defaultFavoriteSpan = Array.from(document.querySelectorAll('span')).find(span => span.title === '默认收藏夹');
    if (defaultFavoriteSpan) {
      const rightClickEvent = new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 2,
        buttons: 2
      });
      defaultFavoriteSpan.dispatchEvent(rightClickEvent);
    }
  }, 1500);
  
  // 找到文字為"確定"的按鈕並右鍵點擊
  setTimeout(() => {
    const confirmButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === '确定');
    if (confirmButton) {
      const rightClickEvent = new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 2,
        buttons: 2
      });
      confirmButton.dispatchEvent(rightClickEvent);
    }
  }, 2000);

  // 找到分享按鈕並右鍵點擊
  setTimeout(() => {
    const shareButton = document.querySelector('div.video-share-wrap.video-toolbar-left-item');
    if (shareButton) {
      const rightClickEvent = new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 2,
        buttons: 2
      });
      shareButton.dispatchEvent(rightClickEvent);
    }
  }, 2500);
  // 找到文字為"動態"的div並右鍵點擊
  setTimeout(() => {
    const dynamicDiv = Array.from(document.querySelectorAll('div')).find(div => div.textContent.trim() === '动态');
    if (dynamicDiv) {
      const rightClickEvent = new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 2,
        buttons: 2
      });
      dynamicDiv.dispatchEvent(rightClickEvent);
    }
  }, 3000);

  // 找到文字為"發佈"的按鈕並點擊
  setTimeout(() => {
    const publishButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === '发布');
    if (publishButton) {
      publishButton.click();
    }
  }, 3500);
  
  // 找到文字為"關閉"的按鈕並右鍵點擊
  setTimeout(() => {
    const closeButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === '关闭');
    if (closeButton) {
      const rightClickEvent = new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 2,
        buttons: 2
      });
      closeButton.dispatchEvent(rightClickEvent);
    }
  }, 4000);

}

// 頁面載入完成後執行自動互動
window.addEventListener('load', autoInteract);