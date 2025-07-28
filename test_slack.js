// 슬랙 웹훅 테스트 스크립트
import https from 'https';

const webhookUrl = 'https://hooks.slack.com/services/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';

const message = {
  text: "🧪 슬랙 알림 시스템 테스트 - 키워드 감지 시스템이 정상 작동합니다! 완료 키워드와 승인 요청 키워드를 제대로 인식하고 있어요.",
  attachments: [{
    color: "good",
    title: "✅ Claude Code 슬랙 연동 테스트",
    text: "SCM 전자책 프로젝트에서 슬랙 알림 시스템이 성공적으로 연동되었습니다."
  }]
};

const url = new URL(webhookUrl);
const postData = JSON.stringify(message);

const options = {
  hostname: url.hostname,
  port: 443,
  path: url.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`응답 상태: ${res.statusCode}`);
  console.log(`응답 헤더:`, res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('응답 데이터:', data);
    if (res.statusCode === 200) {
      console.log('✅ 슬랙 메시지 전송 성공!');
    } else {
      console.log('❌ 슬랙 메시지 전송 실패');
    }
  });
});

req.on('error', (e) => {
  console.error(`요청 에러: ${e.message}`);
});

req.write(postData);
req.end();