# CLAUDE.md - AI Assistant Guide for SCM E-Book Project

> **For AI Assistants**: This document provides comprehensive guidance for understanding and working with the SCM E-Book Project codebase.

## 📋 Project Overview

**Project Name**: SCM 마스터: 주니어에서 컨설턴트로 성장한 실무 가이드 (SCM Master: Practical Guide for Growing from Junior to Consultant)

**Purpose**: An e-book documenting 15 years of real-world Supply Chain Management (SCM) experience, from junior positions to consulting roles, written in authentic storytelling style (자청 스타일 - direct, honest narrative).

**Primary Language**: Korean (한국어)
**Format**: Electronic book (전자책)
**Status**: Active development - 8 main chapters complete, chapters 9-10 and appendix in progress

### Key Characteristics
- **100% Real Stories**: All content based on actual experiences, no fabrication
- **Hybrid Storytelling**: 50% personal narrative + 50% core concepts/frameworks
- **Career Progression**: Structured journey from junior SCM staff to consultant
- **Notion-Backed**: Content managed through Notion database integration
- **Direct Style**: Uses 자청 (Ja-Chung) style - candid, unfiltered, engaging storytelling

## 🏗️ Repository Structure

```
Project_SCMEBook/
├── .claude/                         # Claude Code configuration
│   ├── settings.json               # Permission settings
│   └── settings.local.json         # Local Claude settings
│
├── .git/                           # Primary Git repository
├── .scm-ebook-git/                 # Secondary Git directory (legacy)
│
├── 최종원고/                        # FINAL MANUSCRIPTS (Primary Content)
│   ├── 00_프롤로그.md               # Prologue
│   ├── 01_대기업탈출기.md           # Ch1: Escaping corporate factory life
│   ├── 02_PI팀대참사.md             # Ch2: PI team disaster story
│   ├── 03_협상의기술.md             # Ch3: Negotiation skills
│   ├── 04_데이터분석.md             # Ch4: Data analysis mastery
│   ├── 05_글로벌소싱.md             # Ch5: Global sourcing
│   ├── 06_위기관리.md               # Ch6: Crisis management
│   ├── 07_컨설턴트전환.md           # Ch7: Consultant transformation
│   ├── 08_대형프로젝트.md           # Ch8: Major project success
│   ├── 09_산업별SCM.md              # Ch9: Industry-specific SCM (WIP)
│   ├── 10_실무바이블.md             # Ch10: Practical bible (WIP)
│   ├── 11_부록_로드맵.md            # Appendix: Roadmap (WIP)
│   └── 99_에필로그.md               # Epilogue
│
├── chapters/                       # LEGACY CHAPTER DRAFTS (Reference Only)
│   ├── 제1장_새로운시작.md          # Ch1 old version
│   ├── 제1장_업그레이드.md          # Ch1 upgrade version
│   ├── 제2장_업그레이드.md          # Ch2 upgrade version
│   ├── 제3장_재고최적화.md          # Ch3: Inventory optimization
│   ├── 제4장_물류네트워크.md        # Ch4: Logistics network
│   ├── 제5장_수요예측.md            # Ch5: Demand forecasting
│   ├── 제6장_데이터분석.md          # Ch6: Data analysis
│   ├── 제7장_협상과커뮤니케이션.md  # Ch7: Negotiation & communication
│   └── 제8장_위기관리.md            # Ch8: Crisis management
│
├── assets/                         # Supporting materials
│   └── templates/                  # Practical templates
│       ├── 01_공급업체평가템플릿.md  # Supplier evaluation
│       ├── 02_재고관리템플릿.md      # Inventory management
│       ├── 03_수요예측템플릿.md      # Demand forecasting
│       ├── 04_비용분석템플릿.md      # Cost analysis
│       ├── 05_프로젝트관리템플릿.md  # Project management
│       ├── 체크리스트_모음.md        # Checklists collection
│       ├── 자가진단도구.md          # Self-assessment tools
│       └── 시각적요소_가이드.md     # Visual elements guide
│
├── README.md                       # User-facing project introduction
├── CLAUDE.md                       # This file - AI assistant guide
├── claude.md                       # Project documentation (legacy)
│
├── prologue.md                     # Prologue draft (reference)
├── chapter-structure.md            # Chapter structure planning
├── content-structure.md            # Content structure analysis
├── content-upgrade-roadmap.md      # Content upgrade plan
├── improvement-analysis.md         # Improvement analysis
├── github-setup.md                 # GitHub deployment guide
├── 목차.md                         # Table of contents
├── 프롤로그.md                      # Prologue (Korean)
│
├── .gitignore                      # Git ignore patterns
├── ebook-contents-1차              # First draft collection
└── temp_mcp.txt                    # Temporary MCP data
```

## 🎯 Primary vs Reference Content

**CRITICAL**: Understand the content hierarchy:

### Primary Content (최종원고/ directory)
- **Location**: `/최종원고/*.md`
- **Status**: Final manuscripts in 자청 style
- **Usage**: Primary source for all content queries and edits
- **Chapters 1-8**: COMPLETE ✅
- **Chapters 9-10, Appendix**: IN PROGRESS 🔄
- **Style**: Direct, honest storytelling with concrete examples

### Reference Content (chapters/ directory)
- **Location**: `/chapters/*.md`
- **Status**: Legacy drafts and earlier versions
- **Usage**: Reference only, DO NOT edit these files
- **Purpose**: Historical record of content evolution

### Supporting Materials
- **Templates**: Practical tools in `/assets/templates/`
- **Planning Docs**: Structure and roadmap files in root
- **Configuration**: `.claude/` and git configuration

## 📐 File Naming Conventions

### Final Manuscripts Pattern
```
[NN]_[제목].md
```
- `00_프롤로그.md` - Prologue (00 prefix)
- `01-08_[주제].md` - Main chapters (01-08)
- `09_산업별SCM.md` - Chapter 9 (in progress)
- `10_실무바이블.md` - Chapter 10 (in progress)
- `11_부록_로드맵.md` - Appendix
- `99_에필로그.md` - Epilogue (99 prefix)

### Legacy Chapters Pattern
```
제[N]장_[제목].md
```
- Example: `제1장_새로운시작.md`, `제3장_재고최적화.md`

### Templates Pattern
```
[NN]_[템플릿명].md
```
- Example: `01_공급업체평가템플릿.md`

## ✍️ Content Structure & Writing Style

### 50:50 Hybrid Storytelling Approach

Each chapter follows this proven structure:

```markdown
# 제[N]장: [직설적인 제목]

## 📖 Part 1: 개인 경험담 (50%)
### 실제 상황 설정
- 구체적인 시간, 장소, 인물
- 생생한 현장 묘사
- 감정과 생각의 솔직한 표현

### 갈등과 도전
- 직면한 실제 문제
- 위기 상황의 전개
- 내적/외적 갈등

### 해결 과정
- 단계별 대응 방법
- 시행착오와 깨달음
- 실제 적용한 전략

### 결과와 교훈
- 구체적인 성과 (숫자로)
- 얻은 교훈
- 다음 단계로의 연결

## 🎯 Part 2: 핵심 개념과 프레임워크 (50%)
### 이론적 배경
- 관련 SCM 이론
- 업계 베스트 프랙티스
- 핵심 용어 정의

### 실무 프레임워크
- 체계적 접근 방법
- 의사결정 기준
- 실행 단계

### 적용 방법
- 실무 적용 가이드
- 주의사항과 함정
- 성공 요인

### 핵심 정리
- 중요 포인트 3-5개
- 실천 가능한 액션 아이템
- 관련 챕터 링크

## 💡 [선택적 섹션]
- 인물 소개
- 용어 설명
- 참고 자료
```

### 자청 Style Guidelines

**톤앤매너 (Tone & Manner)**:
- ✅ 직설적이고 솔직한 표현 (e.g., "대기업 똥꼬를 가질 뻔", "회사 망칠 뻔")
- ✅ 구체적인 숫자와 사실 (e.g., "7시 출근", "250종 자재", "15시간 단축")
- ✅ 실제 인물 언급 (e.g., "윤차장", "정대리", "김팀장")
- ✅ 감정의 솔직한 표현 (e.g., "이대로 살면 안 되겠다")
- ✅ 실패와 성공 모두 가감없이 공유
- ❌ 과장되거나 꾸며낸 내용 NO
- ❌ 추상적이거나 이론적인 설명 위주 NO
- ❌ 겸손한 척하는 표현 NO

**문장 구조**:
- 짧고 명확한 문장 (50자 내외)
- 존댓말 사용하되 친근한 톤
- 질문 형식 활용 ("이거 진짜 실화냐?")
- 구어체와 문어체의 적절한 혼합

## 🔄 Development Workflows

### 1. Content Creation Workflow

```
1. 노션 데이터베이스에서 초안 작성
   ↓
2. 50:50 구조로 정리 (경험담 + 이론)
   ↓
3. 최종원고/ 디렉토리에 .md 파일 생성
   ↓
4. 자청 스타일로 리라이팅
   ↓
5. Git 커밋 (명확한 커밋 메시지)
   ↓
6. GitHub 푸시
```

### 2. Editing Workflow

**ALWAYS**:
- ✅ Read the entire file first before editing
- ✅ Maintain the 50:50 story/theory balance
- ✅ Preserve 자청 style (direct, honest tone)
- ✅ Keep concrete numbers and real names
- ✅ Check consistency across chapters

**NEVER**:
- ❌ Edit files in `/chapters/` (legacy reference only)
- ❌ Change the core structure without consultation
- ❌ Remove specific numbers or real experiences
- ❌ Add theoretical content that dilutes storytelling
- ❌ Use formal academic language

### 3. Git Workflow

**Branch Strategy**:
- `main` / `master` - Stable, published content
- `claude/[session-id]` - AI-assisted development branches
- Feature branches as needed

**Commit Message Convention**:
```
<type>: <subject>

<body>

🔥 Generated with [Claude Code](https://claude.ai/code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types**:
- `feat:` - New chapter or major content addition
- `docs:` - Documentation updates
- `refactor:` - Content restructuring
- `sync:` - Notion database synchronization
- `fix:` - Error corrections

**Examples**:
```bash
feat: 제8장 자청 스타일로 완전 리라이팅 완료 - 전체 시리즈 완성!

sync: 노션 데이터베이스 기반 전체 프로젝트 동기화 완료

docs: README.md 10장 + 부록 구조로 업데이트
```

### 4. Pushing Changes

**CRITICAL Git Instructions**:
```bash
# Development branch pattern
git push -u origin claude/[session-id]-[identifier]

# Retry on network failure (exponential backoff)
# Retry sequence: 2s, 4s, 8s, 16s (max 4 retries)

# For specific branch
git fetch origin <branch-name>
git pull origin <branch-name>
```

## 🗂️ Content Management Principles

### Character Consistency

**Core Characters** (Real People - Maintain Consistency):
- **윤차장**: SAP ordering manager, military-style senior, taught formal speech
- **정대리**: MES inventory manager, delegated work strategically
- **김팀장**: True mentor, asked "What is your real job?"
- **심선배**: MES team member, helped with system integration
- **박선배**: SAP expert, taught ABAP coding

### Setting Consistency

**Key Locations**:
- **대기업 공장**: Underground 2nd floor office, no sunlight, 7 AM start
- **PI팀**: 250 types of materials, dual MES/SAP system
- **글로벌 소싱**: German suppliers, cultural differences, currency risk
- **컨설팅 전환**: Salary doubled, from practitioner to consultant

### Numerical Accuracy

**Critical Numbers** (Always Preserve):
- 7시 출근 (7 AM start time)
- 250종 자재 (250 types of materials)
- 15시간 단축 (15 hours saved weekly)
- 5억→10억 (5 billion to 10 billion project turnaround)
- 72시간 (72 hours crisis resolution)
- 100만 달러 (1 million dollar contract)
- 연봉 2배 (Salary doubled)

## 🔗 Integration Points

### Notion Integration

**Notion Workspace**: https://minsssul.notion.site/23887a1932c4802d8027c23003f46f76

**Database Fields**:
1. **제목 (Title)**: Chapter/section title
2. **장 번호 (Chapter Number)**: Sequential numbering
3. **섹션 유형 (Section Type)**: Prologue/Main/Epilogue/Appendix
4. **주요 주제 (Main Topics)**: 8-theme approach
5. **진행 상태 (Progress Status)**: Not started/In progress/Review/Complete
6. **세부 목차 (Detailed Contents)**: Subsections and learning objectives
7. **AI 요약 (AI Summary)**: Key points and learning outcomes

**8-Theme Approach**:
1. 📖 스토리 (Story) - Real experience narratives
2. 👥 캐릭터 (Characters) - Stakeholders and relationships
3. 🌍 배경 (Background) - Industry environment and context
4. 🎯 주제 (Topics) - Core learning content and theory
5. ⚡ 갈등 (Conflicts) - Challenges and solutions
6. 💭 감정 (Emotions) - Psychological growth journey
7. 🔮 상징 (Symbols) - Visual representation of concepts
8. 🏗️ 구조 (Structure) - Systematic learning framework

### MCP (Model Context Protocol) Integration

**Available MCP Tools**:
- `mcp__notionApi__*` - Notion API operations
- `mcp__github-mcp__*` - GitHub operations
- `mcp__slack-*` - Slack notifications
- `mcp__auto-completion-detector__*` - Task tracking

## 📊 Progress Tracking

### Current Status (As of Latest Commit)

**Completed** ✅:
- [x] Project structure and planning (100%)
- [x] Prologue and Epilogue (100%)
- [x] Chapters 1-8 in 자청 style (100%)
- [x] 50:50 hybrid storytelling structure (100%)
- [x] Notion-GitHub synchronization system (100%)

**In Progress** 🔄:
- [ ] Chapter 9: 산업별 SCM의 다양한 얼굴들 (30%)
- [ ] Chapter 10: 12년 경험 SCM 실무 바이블 (30%)
- [ ] Appendix: 로드맵 및 템플릿 (30%)

**Planned** 📅:
- [ ] Expert review and feedback
- [ ] Final editing and proofreading
- [ ] E-book production and formatting
- [ ] Marketing and distribution strategy

### Quality Metrics

**Content Quality Standards**:
- ✅ 50:50 story/theory balance maintained
- ✅ All numbers and facts verified
- ✅ Character consistency across chapters
- ✅ 자청 style tone preserved
- ✅ Practical applicability confirmed

## 🚨 Important Constraints

### DO's ✅

1. **Always edit files in `/최종원고/`** - This is the primary content
2. **Preserve concrete details** - Numbers, names, dates are sacred
3. **Maintain 자청 style** - Direct, honest, engaging
4. **Check cross-chapter consistency** - Characters, settings, facts
5. **Use Korean for content** - This is a Korean e-book
6. **Commit with clear messages** - Follow the convention
7. **Read full files before editing** - Context is critical
8. **Respect the 50:50 balance** - Story + theory equally important

### DON'Ts ❌

1. **Don't edit `/chapters/` files** - These are legacy references
2. **Don't invent facts or numbers** - Only use real experiences
3. **Don't use formal academic tone** - Keep it conversational
4. **Don't remove실패 stories** - Failures are valuable content
5. **Don't add theoretical content without story** - Balance is key
6. **Don't change character names or traits** - Consistency matters
7. **Don't commit without reading** - Understand the full context
8. **Don't skip the 50:50 structure** - It's the project's foundation

## 🎓 Learning Path by Reader Level

### 초급자 (Beginners) 0-2 years
```
프롤로그 → 1-3장 → 4-6장 → 에필로그
```
**Focus**: Basic concepts, mindset, adaptation to SCM field

### 중급자 (Intermediate) 3-7 years
```
프롤로그 → 4-8장 → 9-10장 → 부록
```
**Focus**: Advanced analysis, leadership, cross-functional collaboration

### 고급자 (Advanced) 7+ years, Leaders/Consultants
```
프롤로그 → 7-10장 → 부록 → 전체 리뷰
```
**Focus**: Strategic thinking, consulting methodology, organizational change

## 🛠️ Technical Stack

- **Documentation**: Markdown (.md files)
- **Project Management**: Notion Database
- **Version Control**: Git & GitHub
- **AI Assistance**: Claude Code (SuperClaude Framework)
- **Repository**: https://github.com/TurtleLEE-teacher/Project_SCMEBook

## 📞 Key Contacts & Resources

**Author**: 이선생 (Lee Teacher)
- Former Samsung Electronics SCM Team Lead
- Current Global SCM Consultant
- 15+ years SCM experience

**Notion Workspace**: https://minsssul.notion.site/23887a1932c4802d8027c23003f46f76

**GitHub Repository**: https://github.com/TurtleLEE-teacher/Project_SCMEBook

## 🔍 Quick Reference Commands

### Reading Content
```bash
# Read final manuscript
Read: /home/user/Project_SCMEBook/최종원고/[NN]_[제목].md

# Check chapter structure
Read: /home/user/Project_SCMEBook/chapter-structure.md

# Review roadmap
Read: /home/user/Project_SCMEBook/content-upgrade-roadmap.md
```

### Checking Status
```bash
# Git status
git status

# Recent commits
git log --oneline --graph -10

# See all manuscripts
ls -la /home/user/Project_SCMEBook/최종원고/
```

### Making Changes
```bash
# ALWAYS edit files in 최종원고/ directory
Edit: /home/user/Project_SCMEBook/최종원고/[NN]_[제목].md

# Commit changes
git add 최종원고/[NN]_[제목].md
git commit -m "feat: [description]"

# Push to remote (with retry logic)
git push -u origin claude/[session-id]-[identifier]
```

## 📚 Related Documentation

- `README.md` - User-facing project overview
- `claude.md` - Project documentation (Korean)
- `chapter-structure.md` - Detailed chapter planning
- `content-structure.md` - Content organization analysis
- `content-upgrade-roadmap.md` - Development roadmap
- `improvement-analysis.md` - Quality improvement plan
- `github-setup.md` - GitHub deployment guide

## 🎯 Success Criteria

When working with this project, ensure:

1. ✅ Content authenticity is preserved (real stories, real numbers)
2. ✅ 50:50 balance maintained (story + theory)
3. ✅ 자청 style tone is consistent (direct, honest, engaging)
4. ✅ Character and setting consistency across chapters
5. ✅ Practical applicability for SCM professionals
6. ✅ Clear commit messages following convention
7. ✅ Files edited in correct directory (최종원고/)
8. ✅ Cross-references between chapters work correctly

---

**Last Updated**: 2025-01-17
**Document Version**: 1.0
**Maintained by**: Claude Code AI Assistant

*This guide ensures consistent, high-quality AI assistance for the SCM E-Book Project while preserving the authentic voice and valuable experience of the author.*
