const clockTitle = document.querySelector(".js-clock");
// 크리스마스 날짜 설정 (월은 0부터 시작하므로 11은 12월을 나타냄)
const christmasDate = new Date(new Date().getFullYear(), 11, 25);

function updateCountdown() {
  // 현재 날짜와 크리스마스까지의 시간 차이 계산
  const currentDate = new Date();
  const timeDifference = christmasDate - currentDate;

  // 시간, 분, 초 계산
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // HTML 업데이트

  clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
}

// 페이지 로드 시 초기 업데이트 호출
updateCountdown();

// 1초마다 업데이트
setInterval(updateCountdown, 1000);
