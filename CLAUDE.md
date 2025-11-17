# CLAUDE.md - AI Assistant Guide for SCM E-Book Project

> **For AI Assistants**: This document provides comprehensive guidance for understanding and working with the SCM E-Book Project codebase.  
> **Last Updated**: 2025-01-17 (Based on Notion Export 251117)

## 📋 Project Overview

**Project Name**: SCM 마스터: 주니어에서 컨설턴트로 성장한 실무 가이드  
**English**: SCM Master: Practical Guide for Growing from Junior to Consultant

**Purpose**: An e-book documenting 12 years of real-world Supply Chain Management (SCM) experience, from junior positions at large corporations to consulting roles, written in direct and honest storytelling style.

**Primary Language**: Korean (한국어)  
**Format**: Electronic book (전자책)  
**Status**:
- ✅ Prologue + Chapters 1-10 + Epilogue: **COMPLETE** (from Notion export)
- 🔄 Appendix (부록): **Outline only** (content not written yet)

### Key Characteristics
- **100% Real Stories**: All content based on 12 years of actual SCM experience
- **Direct Storytelling**: Candid, unfiltered narratives with real names, numbers, and situations
- **Career Progression**: Structured journey from corporate factory worker to consultant
- **Notion-Backed**: Content managed and exported from Notion database (Export: 251117)
- **Practical Focus**: Immediately applicable insights from 10+ industries

## 🏗️ Repository Structure

\`\`\`
Project_SCMEBook/
├── .claude/                         # Claude Code configuration
│   ├── settings.json               # Permission settings
│   └── settings.local.json         # Local Claude settings
│
├── .git/                           # Primary Git repository
│
├── 최종원고/                        # FINAL MANUSCRIPTS (Primary Content - FROM NOTION)
│   ├── 00_프롤로그.md               # Prologue: 공급망을 향한 첫 발걸음 (6.5KB)
│   ├── 01_대기업탈출기.md           # Ch1: 대기업 신입의 100일과 현실 충돌 (16KB)
│   ├── 02_PI팀대참사.md             # Ch2: 구매? 혁신? 도대체 내 소속은 어디야? (16KB)
│   ├── 03_협상의기술.md             # Ch3: 김팀장의 특별한 커리어 육성법 (15KB)
│   ├── 04_데이터분석.md             # Ch4: 야근맨에서 칼퇴맨으로 변신하다 (26KB)
│   ├── 05_글로벌소싱.md             # Ch5: 본격적인 PI 합류, SAP MM·ABAP·회계 연동 (27KB)
│   ├── 06_위기관리.md               # Ch6: 폭풍 속에서 홀로 서다 (17KB)
│   ├── 07_컨설턴트전환.md           # Ch7: 글로벌 컨설팅펌, 새로운 세계가 열리다 (14KB)
│   ├── 08_대형프로젝트.md           # Ch8: 14개월의 지옥, 진짜 컨설턴트가 되다 (25KB)
│   ├── 09_산업별SCM.md              # Ch9: 산업별 SCM의 다양한 얼굴들 (35KB)
│   ├── 10_실무바이블.md             # Ch10: 12년 경험으로 정리한 SCM 실무 바이블 (17KB)
│   ├── 11_부록_로드맵.md            # Appendix: SCM 고수 되는 노가다 대공개 (350B - OUTLINE ONLY)
│   └── 99_에필로그.md               # Epilogue: 12년, SCM과 함께 성장하다 (12KB)
│
├── README.md                       # User-facing project introduction
├── CLAUDE.md                       # This file - AI assistant guide
│
├── Notion_251117.zip               # Notion export archive (in master branch)
└── ... (other planning docs)
\`\`\`

## 🎯 Primary Content (최종원고/ directory)

**CRITICAL**: The `최종원고/` directory contains the FINAL, authoritative content exported from Notion on 2025-01-17.

### Complete Chapter List

| File | Emoji | Full Title (Korean) | Size | Status |
|------|-------|---------------------|------|--------|
| `00_프롤로그.md` | 🚢 | 프롤로그: 공급망을 향한 첫 발걸음 | 6.5KB | ✅ Complete |
| `01_대기업탈출기.md` | 💸 | 제1장: 대기업 신입의 100일과 현실 충돌 | 16KB | ✅ Complete |
| `02_PI팀대참사.md` | 📦 | 제2장: 구매? 혁신? 도대체 내 소속은 어디야? | 16KB | ✅ Complete |
| `03_협상의기술.md` | 📚 | 제3장: 김팀장의 특별한 커리어 육성법 | 15KB | ✅ Complete |
| `04_데이터분석.md` | ⚡ | 제4장: 야근맨에서 칼퇴맨으로 변신하다 | 26KB | ✅ Complete |
| `05_글로벌소싱.md` | 💻 | 제5장: 본격적인 PI 합류, SAP MM·ABAP·회계 연동 | 27KB | ✅ Complete |
| `06_위기관리.md` | 🌪️ | 제6장: 폭풍 속에서 홀로 서다 | 17KB | ✅ Complete |
| `07_컨설턴트전환.md` | ✈️ | 제7장: 글로벌 컨설팅펌, 새로운 세계가 열리다 | 14KB | ✅ Complete |
| `08_대형프로젝트.md` | 🔥 | 제8장: 14개월의 지옥, 진짜 컨설턴트가 되다 | 25KB | ✅ Complete |
| `09_산업별SCM.md` | 🏭 | 제9장: 산업별 SCM의 다양한 얼굴들 | 35KB | ✅ Complete |
| `10_실무바이블.md` | 📖 | 제10장: 12년 경험으로 정리한 SCM 실무 바이블 | 17KB | ✅ Complete |
| `11_부록_로드맵.md` | 📚 | 부록: SCM 고수 되는 노가다 대공개 | 350B | ⚠️ Outline only |
| `99_에필로그.md` | 🌅 | 에필로그: 12년, SCM과 함께 성장하다 | 12KB | ✅ Complete |

## ✍️ Content Style & Structure

### Direct Storytelling Approach

The Notion export contains **pure narrative storytelling** with practical insights woven naturally into the experiences.

**Typical Chapter Structure**:
\`\`\`markdown
# [Emoji] 제N장: [직설적인 제목]

> "[핵심 인용구]"

---

## [섹션 제목]
[실제 경험을 생생하게 서술 with 구체적 상황, 인물, 감정]

## [다음 섹션]
[이론과 실무가 자연스럽게 통합된 설명]
\`\`\`

**톤앤매너**:
- ✅ 직설적이고 솔직한 표현 ("100일 만에 뛰쳐나왔다", "원형탈모가 올 정도로")
- ✅ 구체적인 숫자 ("주 40시간 → 10시간", "12년간 10개 이상 산업")
- ✅ 실제 인물 (김팀장, 윤차장, 정대리)
- ✅ 감정의 솔직한 표현 ("이대로 살면 안 되겠다")

## 🚨 Critical Constraints

### DO's ✅
1. **Always edit files in `/최종원고/`** - Notion-synced content
2. **Preserve concrete details** - Numbers, names, dates from 12 years of real experience
3. **Maintain direct storytelling** - Honest, candid, engaging
4. **Trust the Notion export** - It's the authoritative source

### DON'Ts ❌
1. **Don't edit `/chapters/` files** - Legacy references only
2. **Don't invent facts** - Only use author's real experiences
3. **Don't use formal academic tone** - Keep conversational
4. **Don't contradict Notion export** - It's the source of truth

## 📊 Progress Status

**Completed** ✅:
- [x] Prologue + Chapters 1-10 + Epilogue (100%)
- [x] Notion export sync (100%)

**In Progress** 🔄:
- [ ] Appendix: SCM 고수 되는 노가다 대공개 (Outline only - 0%)

## 🔗 Key Resources

**Notion Workspace**: https://minsssul.notion.site/23887a1932c4802d8027c23003f46f76  
**GitHub Repository**: https://github.com/TurtleLEE-teacher/Project_SCMEBook  
**Notion Export**: `Notion_251117.zip` (in master branch)

---

**Document Version**: 2.0  
**Last Updated**: 2025-01-17  
**Based On**: Notion Export 251117  
**Maintained by**: Claude Code AI Assistant

*This guide ensures consistent, high-quality AI assistance while preserving the authentic voice and 12-year experience of the author.*
