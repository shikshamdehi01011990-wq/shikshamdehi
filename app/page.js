
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap");

:root {
  --bg: #080b10;
  --bg2: #0b1016;
  --card: #10161d;
  --card2: #131b23;
  --line: #202b35;
  --text: #f4f7f8;
  --muted: #9ca8b1;
  --lime: #c7ff3d;
  --cyan: #55e6d1;
  --white: #ffffff;
  --max: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button {
  font: inherit;
}

main {
  overflow: hidden;
}

/* ================= NAVBAR ================= */

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 11, 16, 0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navInner {
  width: min(var(--max), calc(100% - 40px));
  height: 76px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.logo > span:last-child > span {
  color: var(--lime);
}

.logoMark {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  background: var(--lime);
  color: #080b10;
  border-radius: 9px;
  font-weight: 800;
}

.navLinks {
  display: flex;
  align-items: center;
  gap: 27px;
  font-size: 14px;
  color: #c5cdd2;
}

.navLinks a {
  transition: color 0.2s ease;
}

.navLinks a:hover {
  color: var(--lime);
}

.navButton {
  padding: 11px 17px;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--text) !important;
}

.navButton:hover {
  border-color: var(--lime);
}

.menuButton {
  display: none;
  border: 0;
  background: transparent;
  color: white;
  cursor: pointer;
}

/* ================= HERO ================= */

.hero {
  min-height: 720px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 85px 0 90px;
  background:
    radial-gradient(circle at 80% 35%, rgba(85, 230, 209, 0.09), transparent 30%),
    radial-gradient(circle at 20% 30%, rgba(199, 255, 61, 0.055), transparent 28%);
}

.heroGrid {
  width: min(var(--max), calc(100% - 40px));
  margin: auto;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 75px;
  align-items: center;
}

.eyebrow,
.sectionLabel {
  color: var(--lime);
  font-family: "Space Grotesk", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
}

.eyebrowDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--lime);
  box-shadow: 0 0 15px rgba(199, 255, 61, 0.8);
}

.hero h1 {
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(55px, 6.5vw, 88px);
  line-height: 0.98;
  letter-spacing: -4px;
  max-width: 700px;
}

.hero h1 span,
h2 span {
  color: var(--lime);
}

.heroText {
  max-width: 590px;
  margin: 30px 0 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.7;
}

.heroButtons,
.ctaButtons {
  display: flex;
  gap: 13px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.primaryButton,
.secondaryButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 14px 20px;
  border-radius: 9px;
  font-weight: 700;
  font-size: 14px;
  transition: 0.2s ease;
}

.primaryButton {
  background: var(--lime);
  color: #080b10;
}

.primaryButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(199, 255, 61, 0.14);
}

.secondaryButton {
  border: 1px solid var(--line);
  color: var(--text);
}

.secondaryButton:hover {
  border-color: var(--lime);
}

.heroStats {
  display: flex;
  gap: 30px;
  margin-top: 48px;
  padding-top: 25px;
  border-top: 1px solid var(--line);
}

.heroStats div {
  display: flex;
  flex-direction: column;
}

.heroStats strong {
  font-family: "Space Grotesk", sans-serif;
  font-size: 25px;
}

.heroStats span {
  color: var(--muted);
  font-size: 12px;
  margin-top: 2px;
}

.heroVisual {
  position: relative;
}

.heroImageCard {
  position: relative;
  height: 570px;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: var(--card);
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.35);
}

.heroImageCard img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.imageOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(5, 8, 11, 0.88),
    rgba(5, 8, 11, 0.02) 58%
  );
}

.heroImageText {
  position: absolute;
  left: 30px;
  bottom: 30px;
  right: 30px;
}

.heroImageText span {
  display: block;
  color: var(--lime);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.6px;
  margin-bottom: 9px;
}

.heroImageText strong {
  font-family: "Space Grotesk", sans-serif;
  font-size: 28px;
  line-height: 1.1;
}

.floatingTag {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 13px;
  border-radius: 8px;
  background: rgba(13, 18, 23, 0.92);
  border: 1px solid var(--line);
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.floatingTag svg {
  color: var(--lime);
}

.tagOne {
  top: 45px;
  left: -20px;
}

.tagTwo {
  right: -20px;
  bottom: 110px;
}

/* ================= JOURNEY STRIP ================= */

.journeyStrip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: #0a0f14;
}

.journeyStripInner {
  width: min(var(--max), calc(100% - 40px));
  margin: auto;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.journeyMini {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #aeb8be;
  font-size: 13px;
}

.journeyMini span {
  color: var(--lime);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
}

.journeyMini svg {
  color: #43505a;
  margin-left: 18px;
}

/* ================= SECTIONS ================= */

.section {
  width: min(var(--max), calc(100% - 40px));
  margin: auto;
  padding: 120px 0;
}

.sectionLabel {
  margin-bottom: 18px;
}

.section h2,
.methodHeading h2 {
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(42px, 5vw, 68px);
  line-height: 1.02;
  letter-spacing: -2.5px;
}

/* ================= INTRO ================= */

.introSection {
  border-bottom: 1px solid var(--line);
}

.introGrid {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 100px;
  margin-top: 25px;
}

.introGrid h2 {
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(45px, 5vw, 70px);
  line-height: 1;
  letter-spacing: -3px;
}

.largeText {
  color: #dce2e5;
  font-size: 20px;
  line-height: 1.65;
}

.mutedText {
  color: var(--muted);
  line-height: 1.8;
}

/* ================= PROGRAMS ================= */

.sectionTop {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 50px;
}

.sectionTop > p {
  max-width: 410px;
  color: var(--muted);
  margin: 0;
}

.programGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.programCard {
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--card);
  border-radius: 14px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.programCard:hover {
  transform: translateY(-5px);
  border-color: #34434e;
}

.programImage {
  position: relative;
  height: 280px;
}

.programImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.programImageOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(8, 11, 16, 0.7),
    transparent 65%
  );
}

.programIcon {
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--lime);
  color: #080b10;
}

.programBody {
  padding: 26px;
}

.programMeta {
  color: var(--lime);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.programBody h3 {
  margin: 8px 0 10px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 27px;
}

.programBody p {
  color: var(--muted);
  margin: 0;
}

.programBody ul {
  padding: 0;
  margin: 22px 0;
  list-style: none;
  display: grid;
  gap: 9px;
}

.programBody li {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #cdd5d9;
  font-size: 14px;
}

.programBody li svg {
  color: var(--lime);
}

.textLink {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--lime);
  font-weight: 700;
  font-size: 14px;
}

.textLink:hover svg {
  transform: translateX(4px);
}

.textLink svg {
  transition: 0.2s ease;
}

/* ================= PROJECTS ================= */

.projectsSection {
  padding-top: 40px;
}

.projectGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.projectCard {
  border: 1px solid var(--line);
  background: var(--card);
  border-radius: 12px;
  overflow: hidden;
}

.projectImage {
  height: 240px;
  position: relative;
}

.projectImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.projectCategory {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 9px;
  background: rgba(8, 11, 16, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  color: var(--lime);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.7px;
}

.projectBody {
  padding: 20px;
}

.projectBody h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  margin: 0 0 8px;
}

.projectBody p {
  color: var(--muted);
  font-size: 14px;
  min-height: 88px;
}

/* ================= METHOD ================= */

.darkSection {
  max-width: none;
  width: 100%;
  padding-left: max(20px, calc((100% - var(--max)) / 2));
  padding-right: max(20px, calc((100% - var(--max)) / 2));
  background: #0c1218;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.methodHeading {
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  gap: 100px;
  align-items: end;
}

.methodHeading p {
  color: var(--muted);
  margin: 0;
  font-size: 17px;
}

.journeyGrid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 65px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.journeyCard {
  min-height: 210px;
  padding: 25px 20px;
  border-right: 1px solid var(--line);
}

.journeyCard:last-child {
  border-right: 0;
}

.journeyNumber {
  color: var(--lime);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 12px;
}

.journeyCard h3 {
  margin: 50px 0 8px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 23px;
}

.journeyCard p {
  color: var(--muted);
  font-size: 13px;
}

/* ================= SCHOOLS ================= */

.schoolGrid {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 85px;
  align-items: center;
}

.schoolImage {
  height: 570px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--line);
}

.schoolImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.schoolImage::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(5, 8, 11, 0.65),
    transparent 60%
  );
}

.schoolImageBadge {
  position: absolute;
  z-index: 2;
  bottom: 25px;
  left: 25px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 11px 14px;
  background: rgba(8, 11, 16, 0.9);
  border: 1px solid var(--line);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
}

.schoolImageBadge svg {
  color: var(--lime);
}

.schoolContent h2 {
  margin-bottom: 25px;
}

.schoolPoints {
  margin: 28px 0;
  display: grid;
  gap: 13px;
}

.schoolPoints div {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  color: #d5dce0;
  font-size: 14px;
}

.schoolPoints svg {
  flex: 0 0 auto;
  color: var(--lime);
  margin-top: 3px;
}

/* ================= DOMAINS ================= */

.domainsSection {
  border-top: 1px solid var(--line);
}

.domainGrid {
  margin-top: 55px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.domainItem {
  min-height: 145px;
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.domainItem span {
  color: #65727c;
  font-size: 12px;
  font-weight: 700;
}

.domainItem strong {
  font-family: "Space Grotesk", sans-serif;
  font-size: 22px;
}

/* ================= ABOUT ================= */

.aboutSection {
  border-top: 1px solid var(--line);
}

.aboutGrid {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 100px;
}

.aboutStats {
  margin-top: 35px;
  display: flex;
  gap: 35px;
  padding-top: 25px;
  border-top: 1px solid var(--line);
}

.aboutStats div {
  display: flex;
  flex-direction: column;
}

.aboutStats strong {
  font-family: "Space Grotesk", sans-serif;
  font-size: 27px;
  color: var(--lime);
}

.aboutStats span {
  color: var(--muted);
  font-size: 12px;
}

/* ================= CTA ================= */

.ctaSection {
  position: relative;
  overflow: hidden;
  padding: 130px 20px;
  border-top: 1px solid var(--line);
  text-align: center;
  background:
    radial-gradient(circle at center, rgba(199, 255, 61, 0.08), transparent 40%),
    #0a0f14;
}

.ctaGlow {
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: rgba(85, 230, 209, 0.04);
  filter: blur(60px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.ctaContent {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: auto;
}

.ctaContent h2 {
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(48px, 6vw, 78px);
  line-height: 1;
  letter-spacing: -3px;
}

.ctaContent p {
  max-width: 580px;
  margin: 25px auto 0;
  color: var(--muted);
  font-size: 17px;
}

.ctaButtons {
  justify-content: center;
}

/* ================= FOOTER ================= */

.footer {
  border-top: 1px solid var(--line);
  padding: 65px 20px 25px;
}

.footerGrid {
  width: min(var(--max), 100%);
  margin: auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 50px;
}

.footerGrid > div:first-child p {
  max-width: 310px;
  color: var(--muted);
  font-size: 14px;
  margin-top: 20px;
}

.footerGrid h4 {
  margin: 0 0 16px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 14px;
}

.footerGrid a:not(.logo) {
  display: block;
  color: var(--muted);
  font-size: 13px;
  margin-bottom: 9px;
}

.footerGrid a:not(.logo):hover {
  color: var(--lime);
}

.footerBottom {
  width: min(var(--max), 100%);
  margin: 55px auto 0;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #69757e;
  font-size: 11px;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 1000px) {
  .navLinks {
    gap: 15px;
  }

  .heroGrid,
  .schoolGrid,
  .aboutGrid,
  .introGrid,
  .methodHeading {
    gap: 50px;
  }

  .projectGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .journeyGrid {
    grid-template-columns: repeat(3, 1fr);
  }

  .journeyCard:nth-child(3) {
    border-right: 0;
  }

  .domainGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 800px) {
  .navInner {
    height: 68px;
  }

  .menuButton {
    display: block;
  }

  .navLinks {
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 15px 20px 20px;
    background: #090d12;
    border-bottom: 1px solid var(--line);
  }

  .navLinks.mobileOpen {
    display: flex;
  }

  .navLinks a {
    padding: 13px 5px;
  }

  .navButton {
    text-align: center;
    margin-top: 7px;
  }

  .hero {
    padding-top: 65px;
  }

  .heroGrid,
  .introGrid,
  .schoolGrid,
  .aboutGrid,
  .methodHeading {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: clamp(52px, 14vw, 78px);
  }

  .heroImageCard {
    height: 450px;
  }

  .heroStats {
    gap: 18px;
  }

  .journeyStripInner {
    overflow-x: auto;
    justify-content: flex-start;
    gap: 20px;
    padding: 18px 0;
  }

  .journeyMini {
    flex: 0 0 auto;
  }

  .sectionTop {
    display: block;
  }

  .sectionTop > p {
    margin-top: 20px;
  }

  .programGrid {
    grid-template-columns: 1fr;
  }

  .projectGrid {
    grid-template-columns: 1fr 1fr;
  }

  .schoolImage {
    height: 450px;
  }

  .journeyGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .journeyCard:nth-child(3) {
    border-right: 1px solid var(--line);
  }

  .journeyCard:nth-child(even) {
    border-right: 0;
  }

  .domainGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footerGrid {
    grid-template-columns: 1fr 1fr;
  }

  .footerBottom {
    flex-direction: column;
  }
}

@media (max-width: 560px) {
  .navInner,
  .section,
  .heroGrid,
  .journeyStripInner {
    width: min(100% - 28px, var(--max));
  }

  .hero {
    padding: 55px 0 65px;
  }

  .hero h1 {
    font-size: 51px;
    letter-spacing: -2.5px;
  }

  .heroText {
    font-size: 16px;
  }

  .heroButtons {
    flex-direction: column;
  }

  .primaryButton,
  .secondaryButton {
    width: 100%;
  }

  .heroImageCard {
    height: 390px;
  }

  .tagOne {
    left: 10px;
  }

  .tagTwo {
    right: 10px;
  }

  .section {
    padding: 80px 0;
  }

  .section h2,
  .methodHeading h2,
  .introGrid h2 {
    font-size: 43px;
    letter-spacing: -2px;
  }

  .projectGrid {
    grid-template-columns: 1fr;
  }

  .projectImage {
    height: 260px;
  }

  .journeyGrid {
    grid-template-columns: 1fr;
  }

  .journeyCard,
  .journeyCard:nth-child(3),
  .journeyCard:nth-child(even) {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .journeyCard:last-child {
    border-bottom: 0;
  }

  .domainGrid {
    grid-template-columns: 1fr 1fr;
  }

  .domainItem {
    min-height: 125px;
  }

  .domainItem strong {
    font-size: 18px;
  }

  .schoolImage {
    height: 350px;
  }

  .aboutStats {
    flex-direction: column;
    gap: 18px;
  }

  .footerGrid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .ctaSection {
    padding: 90px 18px;
  }

  .ctaContent h2 {
    font-size: 47px;
    letter-spacing: -2px;
  }
}

