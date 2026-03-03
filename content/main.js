/**
 * 확장 프로그램의 콘텐츠 스크립트 진입점입니다.
 * 외부 파일에서 작성된 각 Manager 클래스들을 초기화하고 동작시킵니다.
 */
function init() {
    const blacklistManager = new BlacklistManager();

    // 1. 현재 접속한 도메인이 블랙리스트에 포함되어 있으면 조기 종료합니다.
    if (blacklistManager.isCurrentUrlBlacklisted()) {
        console.log('[Absolute Right Click] Extension disabled on this website due to Blacklist.');
        return;
    }

    // 2. 예외가 아닌 사이트에서는 우회 매니저를 초기화하고 실행합니다.
    const styleManager = new StyleManager();
    const eventManager = new EventManager();

    styleManager.init();
    eventManager.init();
}

init();
