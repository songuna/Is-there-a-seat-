// 초기 채팅 인덱스
var currentChatIndex = 0;
var timeoutID;

// 채팅 메시지 클래스 목록
var chatClasses = ['.chat1', '.chat2', '.chat3', '.chat4', '.chat5'];

// wrap 클래스 보이기
function showWrap() {
    var wrap = document.querySelector('.wrap');
    wrap.style.display = 'block';
}

// chat 클래스 숨기기
function hideAllChat() {
    chatClasses.forEach(function(chatClass) {
        var chat = document.querySelector(chatClass);
        chat.style.display = 'none';
    });
}

// chat 클래스 보이기
function showNextChat() {
    hideAllChat();

    // 다음 채팅 클래스 선택
    var nextChatClass = chatClasses[currentChatIndex % chatClasses.length];
    var nextChat = document.querySelector(nextChatClass);
    nextChat.style.display = 'block';

    // 다음 채팅 인덱스 증가
    currentChatIndex++;

    // 마지막 채팅을 보여준 경우 setTimeout 멈춤
    if (currentChatIndex === chatClasses.length) {
        clearTimeout(timeoutID);
    }
}

// 30초마다 다음 채팅 표시
function startChatTimer() {
    showNextChat();
    timeoutID = setTimeout(startChatTimer, 2000); // 30초 (1000ms * 30)
}

// 페이지 로드시 wrap 보여주고 채팅 타이머 시작
window.onload = function() {
    showWrap();
    startChatTimer();
};

// 페이지 새로고침시 채팅 타이머 다시 시작
window.onbeforeunload = function() {
    clearTimeout(timeoutID);
};