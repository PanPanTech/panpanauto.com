# panpanauto.com — 站点说明（给 Claude / 任何 AI 助手）

## 站点定位
- PanPan Auto：英文 B2B 批发站，面向海外**贴膜店 / 汽车美容店 / 区域经销商**，卖漆面保护膜（PPF）和汽车窗膜（window tint），少量配件。
- 身份：ISF、NKODA、NANOLINK 的**多品牌授权经销商 / 分销商**，由 PanPanTech 运营。**不是工厂**，任何页面、JSON-LD、llms.txt 都不能写成工厂、自有产线或原厂。
- 目标：Google 自然搜索 + AI 搜索（ChatGPT / Perplexity / Google AI 模式）引用 → 询盘（`/contact/`，`/inquiry/` 301 到 `/contact/`）。
- 语言：只有英文。`hreflang` 只有 `en` 和 `x-default`。

## 品牌事实（所有页面、JSON-LD、llms.txt 必须一致，唯一来源是 `lib/site.ts`）
- 品牌名：PanPan Auto；运营方：PanPanTech
- 代理品牌：ISF、NKODA、NANOLINK（`brands` 常量）
- 公开电话 / WhatsApp：+86 13925118851；公开邮箱：panda@panpanauto.com
- 产品线：PPF（Clear gloss、Matte / satin、Color、TPU）；窗膜（Nano-ceramic、Photochromic）
- 以下事实**未确认，一律写 TBD，不能编**：
  - TODO：膜厚（mil / μm）、TPU 基材与涂层、自修复说明
  - TODO：质保年限（每个系列分别确认，以品牌方书面授权为准）
  - TODO：认证 / 检测报告（SGS、ISO 等），窗膜 VLT / TSER / IRR 及测试条件、玻璃基材
  - TODO：MOQ、样品政策、交期、Incoterms、区域独家
  - TODO：微信、地址、营业时间、成立年份
  - TODO：授权书是否可公开展示、授权的系列范围
- 车辆图片：产品页大图是**小米汽车（Xiaomi EV）官网参考图**，必须标注为参考图，不能当作 PanPan 施工案例。正式用作商业宣传前需确认版权。
- `/installations/` 和首页施工区的照片 / 视频是**合作门店**实拍，不是 PanPan 自有门店，也没有标注膜系列。不要裁掉车轮，不要旋转或替换施工视频。

## 关键词策略
- GSC 基线（`sc-domain:panpanauto.com`，近 3 个月，截至 2026-11-23）：0 点击 / 42 曝光 / 平均排名 41.9。收录 5 个，15 个「已发现 - 尚未编入索引」。GSC 里提交的是 `https://www.panpanauto.com/sitemap.xml`，而 sitemap 里的网址是 apex。
  - 已有曝光：nanolink ppf dealers / installers / locations / near me（排名 41–70）、tpu ppf / tpu paint protection film / what is tpu ppf（排名 44–89）、品牌词 pan pan auto（7.7）、"xiaomi ev"（3.0，小米参考图带来的无关曝光）
  - 有曝光的网页：`/`（20）、`/blog/what-is-tpu-ppf/`（11）、`/about/`（10，排名 12.5）
- GA4 基线（近 90 天）：86 会话，100% Direct，关键事件 0；`/` 占 78% 浏览。`/&ct=ga...`、`/&source=alertsmail...` 这类路径来自 Google 快讯邮件的坏链接（线上返回 404），不是真实页面。
- **最快能拿的词**：NANOLINK 经销商类（nanolink ppf dealers / installers / where to buy）——Google 已把站点和这些词关联，需要一个专门的 NANOLINK 授权经销商页。
- **主攻（商业意图）**：wholesale PPF / PPF wholesale supplier / paint protection film distributor / TPU PPF wholesale / matte PPF wholesale / color PPF wholesale / nano ceramic window tint wholesale / ISF PPF / NKODA PPF / NANOLINK film
- **AI 引用型问句**（博客承接）：what is TPU PPF、clear vs matte PPF、color PPF vs vinyl wrap、VLT / TSER / IRR 怎么比、PPF 样品怎么验、批发报价怎么比到岸成本
- **不追**：消费者 DIY / 单车价格词（"PPF cost near me"、"how much to wrap my car"）——站点只做批发。
- 不和 XPEL、SunTek、LLumar、STEK 等原厂品牌词硬拼；竞品数据只用于选题（本地 `E:\桌面\汽车配件项目\*.xlsx`）。

## 内容规范
- 博客草稿在 `E:\桌面\汽车配件项目\PanPan Auto 博客文章\`（6 篇 .md，未上线）；8 周排期和优化清单在 `E:\桌面\汽车配件项目\PanPan Auto 网站优化与博客排期.xlsx`。上线前按排期表的「发布前核实的资料」逐条确认。
- 每篇博客：开头 40–60 词直接回答 + 对比表 / 清单 + 结尾 FAQ（FAQPage JSON-LD）+ 询盘 CTA（`/contact/?intent=...`）
- 新文章要同步：`lib/docs.ts`（sitemap 从这里生成）、`/blog/` 列表、页脚 Guides 链接、`public/llms.txt`（目前还没有，需新建）
- 标题 ≤ 60 字符，description ≤ 155 字符
- 内链：博客 → 对应产品页 → `/contact/`
- 不写没有书面依据的参数、质保、认证、价格；占位统一写 TBD

## 技术
- Next.js 15 App Router，`output: 'export'` 静态导出到 `out/`，Node 20+
- 托管：**Cloudflare Pages**，项目名 `panpanauto`（`panpanauto.pages.dev`）；DNS 在阿里云
- 部署：**手动** `npm run pages:build` + `npx wrangler pages deploy out --project-name=panpanauto`（需本机 `wrangler login`）。没有 GitHub Actions，也没有本地定时任务。部署前先 `git pull`，确认本地 = `origin/main`，否则会把旧版本推上线。
- 线上地址：apex `https://panpanauto.com` 和 `https://www.panpanauto.com` 都返回 200；canonical、sitemap 统一指向 apex（`site.url`）。TODO：www → apex 做单跳 301。
- `sitemap.xml`、`robots.txt` 由 `app/sitemap.ts`、`app/robots.ts` 生成；sitemap 路径来自 `lib/docs.ts` + `/`、`/contact/`、`/installations/`（共 19 个网址）
- GA4：`G-9CEF3BK5R2`（媒体资源 563330295，账号 PanPanTech 414295528），代码在 `components/GoogleAnalytics.tsx`
- 询盘表单：`components/InquiryForm.tsx` → `POST /api/inquiry/`（Pages Function `functions/api/inquiry.ts`，校验在 `lib/inquiry.ts`）。设置了 `INQUIRY_WEBHOOK_URL`（Pages secret）才会转发，否则**只写日志**。TODO：确认线上已配置该 secret，询盘能到销售邮箱 / CRM。
- 转化事件：TODO 未实现。需要在接口返回 `ok: true` 后发一次 `gtag('event','generate_lead')`（不带联系方式），并加 `contact_click`（mailto / tel / WhatsApp）
- `npm run dev` 不跑 Pages Function，本地表单会报错；要测表单用 `npm run build && npm run pages:dev`，密钥放 `.dev.vars`（已 gitignore）
- 不提交密钥

## 工作流
- 新改动开分支 `seo/<主题>-<MMDD>` 或 `post/<slug>-<MMDD>`，`npm run build` 通过后合并 `main`，再手动部署
- 远程 `cursor/*` 分支都已 squash 合并进 `main`，可删除，不要再合并
- 每周看 GSC：曝光高 + 点击率 < 1% 的页面优先改标题和开头
- 跨站规范见 `E:\桌面\SEO`（总控）
