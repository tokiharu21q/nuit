import { OverlayScrollbars } from 'overlayscrollbars';
import 'overlayscrollbars/overlayscrollbars.css';

export function initCustomScrollbars(root: Document | HTMLElement = document) {
  const targets = root.querySelectorAll('.island-content');
  targets.forEach((el) => {
    if ((el as any).__os_initialized) return;
    OverlayScrollbars(el as HTMLElement, {
      scrollbars: {
        autoHide: 'scroll', // スクロール中のみ表示
        autoHideDelay: 400,
      },
    });
    (el as any).__os_initialized = true;
  });
}


