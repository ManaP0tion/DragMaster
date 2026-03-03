/**
 * 모든 요소의 user-select 속성을 초기화하여 텍스트 및 드래그 차단을 무력화하는 클래스입니다.
 */
class StyleManager {
    constructor() {
        this._cssRules = `
      * {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
    `;
    }

    /**
     * document.head에 새로운 style 태그를 주입하여 드래그/선택을 활성화합니다.
     */
    init() {
        this._injectStyle();
    }

    /**
     * 스타일 요소를 생성하고 cssRule을 주입합니다.
     */
    _injectStyle() {
        const styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.innerText = this._cssRules;

        // document_start 시점이라 head가 없을 수 있으므로 예외 처리
        if (document.head) {
            document.head.appendChild(styleElement);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                document.head.appendChild(styleElement);
            });
        }
    }
}
