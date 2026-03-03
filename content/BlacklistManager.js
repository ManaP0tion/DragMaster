/**
 * 크롬 확장 프로그램이 동작하지 말아야 할 사이트를 필터링하는 기능을 관리합니다.
 */
class BlacklistManager {
    constructor() {
        this._blackList = [
            'youtube.com', '.google.', '.google.com', 'greasyfork.org', 'twitter.com',
            'instagram.com', 'facebook.com', 'translate.google.com', '.amazon.',
            '.ebay.', 'github.', 'stackoverflow.com', 'bing.com', 'live.com',
            '.microsoft.com', 'dropbox.com', 'pcloud.com', 'box.com', 'sync.com',
            'onedrive.com', 'mail.ru', 'deviantart.com', 'pastebin.com',
            'dailymotion.com', 'twitch.tv', 'spotify.com', 'steam.com',
            'steampowered.com', 'gitlab.com', '.reddit.com'
        ];
    }

    /**
     * 현재 브라우저의 도메인이 블랙리스트에 해당하는지 확인하는 역할을 수행합니다.
     * @returns {boolean} 블랙리스트에 포함되어 있으면 true, 아니면 false 반환
     */
    isCurrentUrlBlacklisted() {
        const url = window.location.hostname;
        // 제공받은 스크립트대로 배열 요소들을 파이프(|)로 묶어 정규식 검사 수행
        const regexPattern = new RegExp(this._blackList.join('|'));

        return regexPattern.test(url);
    }
}
