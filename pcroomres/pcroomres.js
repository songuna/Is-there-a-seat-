document.addEventListener('DOMContentLoaded', () => {

    const seatContainer = document.querySelector('.seatContainer');

    const pcroom = document.getElementById('pcroom'); // 선택할 피시방
    let pcroomres = Number(pcroom.value); // 피시방 가격 

    let count = document.querySelector('#count'); // 인원수

    // 선택한 좌석수 텍스트 변경해주기
    function countSeatlist() {
        const selectedSeatCount = document.querySelectorAll('.selectedSeat').length;

        count.textContent = selectedSeatCount;
    }

    //좌석 클릭했을때
    seatContainer.addEventListener('click', (e) => {
        if (e.target.className === 'seat') {
            e.target.className = 'selectedSeat';
        } else if (e.target.className === 'selectedSeat') {
            e.target.className = 'seat';
        }

        countSeatlist();
    });

    // 예약하기 버튼 클릭했을때
    const reserveButton = document.getElementById('res');
    reserveButton.addEventListener('click', () => {
        alert('예약이 완료되었습니다.');
    });

    // 피시방 변경할때는 가격을 업데이트할 필요가 없으므로 해당 부분은 삭제
});