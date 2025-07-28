# 슬랙 웹훅 테스트 가이드

## Webhook URL로 메시지 보내기

### PowerShell 사용
```powershell
$webhookUrl = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
$message = @{
    text = "테스트 메시지입니다!"
    username = "알림봇"
    icon_emoji = ":bell:"
} | ConvertTo-Json

Invoke-RestMethod -Uri $webhookUrl -Method Post -Body $message -ContentType "application/json"
```

### curl 사용 (WSL 또는 Git Bash)
```bash
curl -X POST -H 'Content-type: application/json' \
--data '{"text":"안녕하세요! 웹훅 테스트입니다."}' \
YOUR_WEBHOOK_URL
```

### 고급 메시지 포맷
```json
{
  "text": "SCM 전자책 프로젝트 알림",
  "attachments": [
    {
      "color": "good",
      "fields": [
        {
          "title": "챕터 진행 상황",
          "value": "제1장: 완료\n제2장: 검토 중",
          "short": false
        }
      ]
    }
  ]
}
```

## Bot Token 사용 시 추가 기능

Bot Token을 사용하면 다음과 같은 추가 기능을 사용할 수 있습니다:
- 채널 목록 조회
- 사용자 정보 조회
- 파일 업로드
- 메시지 수정/삭제
- 스레드 응답