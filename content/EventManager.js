/**
 * 우클릭, 복사, 드래그 등의 JavaScript 이벤트 동작 차단을 무력화하는 클래스입니다.
 */
class EventManager {
    constructor() {
        this._blockedEvents = [
            'contextmenu',
            'copy',
            'cut',
            'paste',
            'selectstart',
            'dragstart'
        ];
    }

    /**
     * 이벤트 차단을 해제하기 위해 초기화 작업을 수행합니다.
     */
    init() {
        this._enableEvents();
        this._clearInlineEventAttributes();
    }

    /**
     * 캡처링 단계를 이용하여 설정된 이벤트들의 전파를 강제로 차단하여 기본 동작을 유도합니다.
     */
    _enableEvents() {
        this._blockedEvents.forEach(eventName => {
            document.addEventListener(
                eventName,
                (e) => {
                    e.stopPropagation();
                },
                true // Use Capturing phase
            );
        });
    }

    /**
     * 기존 사이트에서 document 요소에 직접 inline으로 건 이벤트들을 무력화합니다.
     */
    _clearInlineEventAttributes() {
        const doc = document;
        const body = document.body;

        if (body) {
            body.oncontextmenu = null;
            body.onselectstart = null;
            body.ondragstart = null;
            body.oncut = null;
            body.oncopy = null;
            body.onpaste = null;
        }

        if (doc) {
            doc.oncontextmenu = null;
            doc.onselectstart = null;
            doc.ondragstart = null;
        }
    }
}
