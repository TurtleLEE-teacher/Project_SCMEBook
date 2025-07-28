# GitHub 배포 가이드

## 🚀 GitHub 레포지토리 생성 및 배포 방법

### 1단계: GitHub에서 새 레포지토리 생성

1. **GitHub 접속**: https://github.com 로 이동
2. **New Repository 클릭**: 우상단의 "+" 버튼 → "New repository"
3. **레포지토리 설정**:
   - **Repository name**: `SCM-EBook-Project`
   - **Description**: `SCM 마스터: 주니어에서 컨설턴트로 성장한 실무 가이드 - 전자책 제작 프로젝트`
   - **Public/Private**: Public (공개) 선택
   - **Initialize**: ❌ README, .gitignore, license 체크 해제 (이미 로컬에 있음)

4. **Create repository** 클릭

### 2단계: 로컬에서 GitHub에 연결

레포지토리 생성 후 GitHub에서 제공하는 URL을 사용하여 다음 명령어를 실행:

```bash
cd "C:\Users\ahfif\SuperClaude\Project_SCMEBook"

# GitHub 원격 저장소 추가
git --git-dir=.scm-ebook-git --work-tree=. remote add origin https://github.com/[YOUR_USERNAME]/SCM-EBook-Project.git

# 메인 브랜치를 main으로 변경 (GitHub 표준)
git --git-dir=.scm-ebook-git --work-tree=. branch -M main

# GitHub에 푸시
git --git-dir=.scm-ebook-git --work-tree=. push -u origin main
```

**주의**: `[YOUR_USERNAME]`을 실제 GitHub 사용자명으로 변경하세요.

### 3단계: 인증 설정

GitHub 푸시 시 인증이 필요합니다:

#### 방법 1: Personal Access Token 사용 (권장)
1. GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" 클릭
3. 권한 설정: `repo` 체크
4. 생성된 토큰을 복사
5. 푸시 시 비밀번호 대신 토큰 사용

#### 방법 2: GitHub CLI 사용
```bash
# GitHub CLI 설치 후
gh auth login
git --git-dir=.scm-ebook-git --work-tree=. push -u origin main
```

### 4단계: 배포 완료 확인

성공적으로 푸시되면:
1. GitHub 레포지토리 페이지에서 파일들 확인
2. README.md가 자동으로 렌더링되어 표시
3. 프로젝트 설명과 구조가 올바르게 표시되는지 확인

## 📋 현재 준비된 파일들

✅ 다음 파일들이 이미 준비되어 커밋되었습니다:

- `README.md` - 프로젝트 메인 문서
- `.gitignore` - Git 무시 파일 설정  
- `claude.md` - 프로젝트 상세 문서
- `prologue.md` - 전자책 프롤로그
- `improvement-analysis.md` - 개선 방안 분석
- `content-structure.md` - 컨텐츠 구조 분석  
- `chapter-structure.md` - 챕터 구조 설계

## 🎯 다음 단계

GitHub 배포 완료 후:

1. **브랜치 전략**: `main` (배포용), `develop` (개발용) 브랜치 생성
2. **이슈 템플릿**: 기여자들을 위한 이슈 템플릿 설정
3. **프로젝트 보드**: GitHub Projects로 진행 상황 관리
4. **자동화**: GitHub Actions로 문서 빌드 자동화

## 🚨 문제 해결

### 푸시 권한 오류
```
remote: Permission to username/SCM-EBook-Project.git denied
```
→ Personal Access Token 또는 SSH 키 설정 필요

### 브랜치 충돌
```
error: failed to push some refs
```
→ `git pull origin main` 후 다시 푸시

### 인증 문제
```
Authentication failed
```
→ GitHub CLI 사용 또는 Personal Access Token 재확인

---

**📞 도움이 필요하시면 언제든 말씀해주세요!**