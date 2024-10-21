function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas-container'); // 캔버스를 특정 div에 넣기
    angleMode(DEGREES); // 각도를 도(degree) 단위로 설정
  }
  
  function draw() {
    background(255);
    translate(width / 2, height / 2); // 캔버스의 중심을 (0, 0)으로 이동
  
    let hours = hour();   // 현재 시각의 시간 (0-23)
    let minutes = minute(); // 현재 시각의 분 (0-59)
    let seconds = second(); // 현재 시각의 초 (0-59)
  
    // 24시간 기준을 25시간 기준으로 변환
    let totalMinutes = hours * 60 + minutes; // 현재 시간을 분으로 환산
    let total25hMinutes = totalMinutes * (25 / 24); // 25시간 기준으로 변환
    let hour25 = floor(total25hMinutes / 60); // 25시간 기준으로 시간 계산
    let minute25 = total25hMinutes % 60; // 25시간 기준으로 분 계산
    
    // 25각형 시계 그리기
    strokeWeight(8);
    noFill();
    beginShape();
    for (let i = 0; i < 25; i++) {
      let angle = map(i, 0, 25, 0, 360); // 25각형의 각도 계산
      let x = 150 * cos(angle - 90);
      let y = 150 * sin(angle - 90);
      vertex(x, y); // 각 점에 대한 좌표 설정
    }
    endShape(CLOSE);
  
    // 각 시간마다 숫자 표기 (1~25)
    strokeWeight(1);
    for (let i = 1; i <= 25; i++) {
      let angle = map(i, 0, 25, 0, 360); // 각도를 계산하여 숫자 위치 설정
      let x = 130 * cos(angle - 90);
      let y = 130 * sin(angle - 90);
  
      // 시간마다 숫자 표시
      textAlign(CENTER, CENTER);
      text(i, x, y); // 숫자 출력
    }
  
    // 시침 (25시간 기준 각도)
    let hourAngle = map(hour25 % 25, 0, 25, 0, 360); // 시침 각도
    stroke(0);
    strokeWeight(6);
    let hourX = 80 * cos(hourAngle - 90);
    let hourY = 80 * sin(hourAngle - 90);
    line(0, 0, hourX, hourY);
  
    // 분침 (60분 기준 각도)
    let minuteAngle = map(minute25, 0, 60, 0, 360); // 분침 각도
    stroke(100);
    strokeWeight(4);
    let minuteX = 120 * cos(minuteAngle - 90);
    let minuteY = 120 * sin(minuteAngle - 90);
    line(0, 0, minuteX, minuteY);
  
    // 초침 (60초 기준 각도)
    let secondAngle = map(seconds, 0, 60, 0, 360); // 초침 각도
    stroke(150, 0, 0);
    strokeWeight(2);
    let secondX = 120 * cos(secondAngle - 90);
    let secondY = 120 * sin(secondAngle - 90);
    line(0, 0, secondX, secondY);
  }
  