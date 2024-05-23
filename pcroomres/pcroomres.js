document.addEventListener('DOMContentLoaded', () => {

    const seatContainer = document.querySelector('.seatContainer');
    const resButton = document.getElementById('res');
    const count = document.getElementById('count');

    const pcroom = document.getElementById('pcroom'); // 선택할 피시방

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


    // 선택된 좌석 개수를 0으로 초기화하는 함수
    function resetSelectedSeatCount() {
        count.textContent = '0';
    }

     function markSeatsAsOccupied() {
        const selectedSeats = document.querySelectorAll('.selectedSeat');

        selectedSeats.forEach(seat => {
            seat.classList.remove('selectedSeat');
            seat.classList.add('occupiedSeat');
            seat.textContent = ''; // 선택된 좌석의 텍스트 내용을 제거합니다.
        });
    }

    // 예약하기 버튼 클릭했을때
    const reserveButton = document.getElementById('res');
    reserveButton.addEventListener('click', () => {
        alert('예약이 완료되었습니다.');

        // 예약이 완료된 후에 occupiedSeat으로 변경하는 함수를 호출합니다.
        markSeatsAsOccupied();

        // 선택된 좌석 개수를 0으로 초기화합니다.
        resetSelectedSeatCount();
    });
});