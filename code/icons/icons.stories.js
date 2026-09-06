// Icons — сгенерировано из components/icons/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./icons.css";

const VARIANTS = {
  "Clock|Accent": `
    <div class="oc-icons oc-icons--icon-clock oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75V6.75L4.75 8.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Circle|Accent": `
    <div class="oc-icons oc-icons--icon-circle oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Warning|Accent": `
    <div class="oc-icons oc-icons--icon-warning oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.498 15.7639L12.498 1.7639C12.3236 1.4561 12.0706 1.20008 11.7649 1.02197C11.4592 0.843846 11.1118 0.75 10.758 0.75C10.4042 0.75 10.0568 0.843846 9.75107 1.02197C9.44539 1.20008 9.19243 1.4561 9.018 1.7639L1.018 15.7639C0.841678 16.0693 0.749224 16.4158 0.750005 16.7684C0.750786 17.121 0.844774 17.4671 1.02244 17.7717C1.20011 18.0763 1.45514 18.3285 1.76169 18.5027C2.06824 18.677 2.4154 18.7671 2.768 18.7639H18.768C19.1189 18.7635 19.4635 18.6709 19.7673 18.4952C20.071 18.3195 20.3232 18.067 20.4985 17.763C20.6738 17.459 20.766 17.1143 20.7659 16.7634C20.7659 16.4125 20.6734 16.0678 20.498 15.7639Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="2" height="6" viewBox="0 0 2 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75V4.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H0.76" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "CircleCheck|Accent": `
    <div class="oc-icons oc-icons--icon-circle-check oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 2.75L2.75 4.75L6.75 0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Bolt|Accent": `
    <div class="oc-icons oc-icons--icon-bolt oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6637 2.74918C12.7768 2.42854 12.7777 2.07898 12.6661 1.75779C12.5545 1.43661 12.3372 1.16285 12.0496 0.981416C11.762 0.799977 11.4214 0.721619 11.0834 0.759186C10.7455 0.796753 10.4304 0.948016 10.1897 1.18818L1.18968 10.1882C0.979825 10.3979 0.836875 10.6651 0.778909 10.9561C0.720943 11.2471 0.750565 11.5487 0.864028 11.8228C0.977492 12.097 1.1697 12.3313 1.41635 12.4962C1.66299 12.6611 1.95299 12.7491 2.24968 12.7492H6.25168C6.33156 12.7493 6.41025 12.7685 6.48116 12.8053C6.55207 12.842 6.61315 12.8953 6.65927 12.9605C6.70539 13.0257 6.73522 13.101 6.74625 13.1801C6.75728 13.2592 6.7492 13.3398 6.72268 13.4152L4.83568 18.7492C4.72249 19.0699 4.72167 19.4196 4.83336 19.7409C4.94505 20.0622 5.16261 20.3359 5.45035 20.5173C5.7381 20.6987 6.07894 20.7769 6.41697 20.7391C6.755 20.7012 7.07013 20.5497 7.31068 20.3092L16.3107 11.3092C16.5203 11.0993 16.6629 10.8321 16.7207 10.5412C16.7784 10.2503 16.7486 9.94884 16.6351 9.67487C16.5215 9.4009 16.3293 9.16674 16.0827 9.00198C15.8361 8.83721 15.5462 8.74924 15.2497 8.74918H11.2527C11.1726 8.74929 11.0937 8.73017 11.0225 8.69342C10.9514 8.65667 10.8901 8.60337 10.8438 8.538C10.7976 8.47263 10.7677 8.39711 10.7567 8.31779C10.7457 8.23846 10.7539 8.15766 10.7807 8.08218L12.6637 2.74918Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Document|Accent": `
    <div class="oc-icons oc-icons--icon-document oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 20.75C2.21957 20.75 1.71086 20.5393 1.33579 20.1642C0.960714 19.7891 0.75 19.2804 0.75 18.75V2.75C0.75 2.21957 0.960714 1.71086 1.33579 1.33579C1.71086 0.960717 2.21957 0.750003 2.75 0.750003H10.75C11.0666 0.74949 11.3801 0.811605 11.6725 0.932772C11.965 1.05394 12.2306 1.23176 12.454 1.456L16.042 5.044C16.2668 5.26751 16.4452 5.53335 16.5667 5.82616C16.6882 6.11898 16.7505 6.43297 16.75 6.75V18.75C16.75 19.2804 16.5393 19.7891 16.1642 20.1642C15.7891 20.5393 15.2804 20.75 14.75 20.75H2.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75V5.75C0.75 6.01522 0.855357 6.26957 1.04289 6.45711C1.23043 6.64464 1.48478 6.75 1.75 6.75H6.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="4" height="2" viewBox="0 0 4 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 0.75H0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 0.75H0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-5" aria-hidden="true" focusable="false" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 0.75H0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "ChevronDown|Accent": `
    <div class="oc-icons oc-icons--icon-chevron-down oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L6.75 6.75L12.75 0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Plus|Accent": `
    <div class="oc-icons oc-icons--icon-plus oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H14.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75V14.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "X|Accent": `
    <div class="oc-icons oc-icons--icon-x oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 0.75L0.75 12.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L12.75 12.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Edit|Accent": `
    <div class="oc-icons oc-icons--icon-edit oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9239 5.56238C20.4526 5.0338 20.7497 4.31685 20.7498 3.56923C20.7499 2.82162 20.453 2.10459 19.9244 1.57588C19.3959 1.04717 18.6789 0.750094 17.9313 0.75C17.1837 0.749906 16.4666 1.0468 15.9379 1.57538L2.59193 14.9244C2.35975 15.1559 2.18805 15.4409 2.09193 15.7544L0.770934 20.1064C0.74509 20.1929 0.743138 20.2847 0.765286 20.3722C0.787433 20.4597 0.832855 20.5396 0.896731 20.6034C0.960607 20.6672 1.04055 20.7124 1.12809 20.7345C1.21563 20.7565 1.30749 20.7544 1.39393 20.7284L5.74693 19.4084C6.0601 19.3131 6.34511 19.1425 6.57693 18.9114L19.9239 5.56238Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Trash|Accent": `
    <div class="oc-icons oc-icons--icon-trash oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75V6.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75V6.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 0.75V14.75C14.75 15.2804 14.5393 15.7891 14.1642 16.1642C13.7891 16.5393 13.2804 16.75 12.75 16.75H2.75C2.21957 16.75 1.71086 16.5393 1.33579 16.1642C0.960714 15.7891 0.75 15.2804 0.75 14.75V0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H18.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-5" aria-hidden="true" focusable="false" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 4.75V2.75C0.75 2.21957 0.960714 1.71086 1.33579 1.33579C1.71086 0.960714 2.21957 0.75 2.75 0.75H6.75C7.28043 0.75 7.78914 0.960714 8.16421 1.33579C8.53929 1.71086 8.75 2.21957 8.75 2.75V4.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Download|Accent": `
    <div class="oc-icons oc-icons--icon-download oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 12.75V0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 0.75V4.75C18.75 5.28043 18.5393 5.78914 18.1642 6.16421C17.7891 6.53929 17.2804 6.75 16.75 6.75H2.75C2.21957 6.75 1.71086 6.53929 1.33579 6.16421C0.960714 5.78914 0.75 5.28043 0.75 4.75V0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L5.75 5.75L10.75 0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Print|Accent": `
    <div class="oc-icons oc-icons--icon-print oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 9.75H2.75C2.21957 9.75 1.71086 9.53929 1.33579 9.16421C0.960714 8.78914 0.75 8.28043 0.75 7.75V2.75C0.75 2.21957 0.960714 1.71086 1.33579 1.33579C1.71086 0.960714 2.21957 0.75 2.75 0.75H18.75C19.2804 0.75 19.7891 0.960714 20.1642 1.33579C20.5393 1.71086 20.75 2.21957 20.75 2.75V7.75C20.75 8.28043 20.5393 8.78914 20.1642 9.16421C19.7891 9.53929 19.2804 9.75 18.75 9.75H16.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 7.75V1.75C0.75 1.48478 0.855357 1.23043 1.04289 1.04289C1.23043 0.855357 1.48478 0.75 1.75 0.75H11.75C12.0152 0.75 12.2696 0.855357 12.4571 1.04289C12.6446 1.23043 12.75 1.48478 12.75 1.75V7.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.75 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V7.75C0.75 8.30228 1.19772 8.75 1.75 8.75H11.75C12.3023 8.75 12.75 8.30228 12.75 7.75V1.75C12.75 1.19772 12.3023 0.75 11.75 0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "MoreVertical|Accent": `
    <div class="oc-icons oc-icons--icon-more-vertical oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 2.75C2.30228 2.75 2.75 2.30228 2.75 1.75C2.75 1.19772 2.30228 0.75 1.75 0.75C1.19772 0.75 0.75 1.19772 0.75 1.75C0.75 2.30228 1.19772 2.75 1.75 2.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 2.75C2.30228 2.75 2.75 2.30228 2.75 1.75C2.75 1.19772 2.30228 0.75 1.75 0.75C1.19772 0.75 0.75 1.19772 0.75 1.75C0.75 2.30228 1.19772 2.75 1.75 2.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 2.75C2.30228 2.75 2.75 2.30228 2.75 1.75C2.75 1.19772 2.30228 0.75 1.75 0.75C1.19772 0.75 0.75 1.19772 0.75 1.75C0.75 2.30228 1.19772 2.75 1.75 2.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Grid|Accent": `
    <div class="oc-icons oc-icons--icon-grid oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V6.75C0.75 7.30228 1.19772 7.75 1.75 7.75H6.75C7.30228 7.75 7.75 7.30228 7.75 6.75V1.75C7.75 1.19772 7.30228 0.75 6.75 0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V6.75C0.75 7.30228 1.19772 7.75 1.75 7.75H6.75C7.30228 7.75 7.75 7.30228 7.75 6.75V1.75C7.75 1.19772 7.30228 0.75 6.75 0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V6.75C0.75 7.30228 1.19772 7.75 1.75 7.75H6.75C7.30228 7.75 7.75 7.30228 7.75 6.75V1.75C7.75 1.19772 7.30228 0.75 6.75 0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V6.75C0.75 7.30228 1.19772 7.75 1.75 7.75H6.75C7.30228 7.75 7.75 7.30228 7.75 6.75V1.75C7.75 1.19772 7.30228 0.75 6.75 0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Car|Accent": `
    <div class="oc-icons oc-icons--icon-car oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.75 10.75H19.75C20.35 10.75 20.75 10.35 20.75 9.75V6.75C20.75 5.85 20.05 5.05 19.25 4.85C17.45 4.35 14.75 3.75 14.75 3.75C14.75 3.75 13.45 2.35 12.55 1.45C12.05 1.05 11.45 0.75 10.75 0.75H3.75C3.15 0.75 2.65 1.15 2.35 1.65L0.95 4.55C0.81758 4.93623 0.75 5.3417 0.75 5.75V9.75C0.75 10.35 1.15 10.75 1.75 10.75H3.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 4.75C3.85457 4.75 4.75 3.85457 4.75 2.75C4.75 1.64543 3.85457 0.75 2.75 0.75C1.64543 0.75 0.75 1.64543 0.75 2.75C0.75 3.85457 1.64543 4.75 2.75 4.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H6.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 4.75C3.85457 4.75 4.75 3.85457 4.75 2.75C4.75 1.64543 3.85457 0.75 2.75 0.75C1.64543 0.75 0.75 1.64543 0.75 2.75C0.75 3.85457 1.64543 4.75 2.75 4.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "List|Accent": `
    <div class="oc-icons oc-icons--icon-list oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H0.76" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H0.76" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H0.76" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H13.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-5" aria-hidden="true" focusable="false" width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H13.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-6" aria-hidden="true" focusable="false" width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H13.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Shield|Accent": `
    <div class="oc-icons oc-icons--icon-shield oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 11.7504C16.75 16.7504 13.25 19.2505 9.09 20.7005C8.87216 20.7743 8.63554 20.7707 8.42 20.6905C4.25 19.2505 0.75 16.7504 0.75 11.7504V4.75045C0.75 4.48523 0.855357 4.23088 1.04289 4.04334C1.23043 3.85581 1.48478 3.75045 1.75 3.75045C3.75 3.75045 6.25 2.55045 7.99 1.03045C8.20185 0.849448 8.47135 0.75 8.75 0.75C9.02865 0.75 9.29815 0.849448 9.51 1.03045C11.26 2.56045 13.75 3.75045 15.75 3.75045C16.0152 3.75045 16.2696 3.85581 16.4571 4.04334C16.6446 4.23088 16.75 4.48523 16.75 4.75045V11.7504Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Archive|Accent": `
    <div class="oc-icons oc-icons--icon-archive oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="7" viewBox="0 0 22 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V4.75C0.75 5.30228 1.19772 5.75 1.75 5.75H19.75C20.3023 5.75 20.75 5.30228 20.75 4.75V1.75C20.75 1.19772 20.3023 0.75 19.75 0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75V11.75C0.75 12.2804 0.960714 12.7891 1.33579 13.1642C1.71086 13.5393 2.21957 13.75 2.75 13.75H14.75C15.2804 13.75 15.7891 13.5393 16.1642 13.1642C16.5393 12.7891 16.75 12.2804 16.75 11.75V0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H4.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Settings|Accent": `
    <div class="oc-icons oc-icons--icon-settings oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.37736 2.86857C7.43246 2.28891 7.70169 1.75062 8.13246 1.35885C8.56323 0.967088 9.12459 0.75 9.70686 0.75C10.2891 0.75 10.8505 0.967088 11.2813 1.35885C11.712 1.75062 11.9813 2.28891 12.0364 2.86857C12.0695 3.24303 12.1923 3.60399 12.3945 3.92091C12.5967 4.23783 12.8722 4.50138 13.1978 4.68925C13.5234 4.87712 13.8895 4.98378 14.2651 5.00019C14.6406 5.01661 15.0146 4.94231 15.3554 4.78357C15.8845 4.54335 16.484 4.50859 17.0374 4.68606C17.5907 4.86353 18.0582 5.24052 18.3489 5.74368C18.6396 6.24683 18.7326 6.84015 18.61 7.40814C18.4874 7.97614 18.1578 8.47819 17.6854 8.81657C17.3777 9.03242 17.1266 9.31918 16.9533 9.6526C16.7799 9.98602 16.6894 10.3563 16.6894 10.7321C16.6894 11.1079 16.7799 11.4781 16.9533 11.8115C17.1266 12.145 17.3777 12.4317 17.6854 12.6476C18.1578 12.986 18.4874 13.488 18.61 14.056C18.7326 14.624 18.6396 15.2173 18.3489 15.7205C18.0582 16.2236 17.5907 16.6006 17.0374 16.7781C16.484 16.9556 15.8845 16.9208 15.3554 16.6806C15.0146 16.5218 14.6406 16.4475 14.2651 16.464C13.8895 16.4804 13.5234 16.587 13.1978 16.7749C12.8722 16.9628 12.5967 17.2263 12.3945 17.5432C12.1923 17.8602 12.0695 18.2211 12.0364 18.5956C11.9813 19.1752 11.712 19.7135 11.2813 20.1053C10.8505 20.4971 10.2891 20.7141 9.70686 20.7141C9.12459 20.7141 8.56323 20.4971 8.13246 20.1053C7.70169 19.7135 7.43246 19.1752 7.37736 18.5956C7.3443 18.221 7.22146 17.8599 7.01922 17.5428C6.81699 17.2258 6.54133 16.9622 6.21559 16.7743C5.88985 16.5864 5.52363 16.4798 5.14794 16.4635C4.77225 16.4472 4.39816 16.5216 4.05736 16.6806C3.52825 16.9208 2.92869 16.9556 2.37536 16.7781C1.82203 16.6006 1.35453 16.2236 1.06384 15.7205C0.773153 15.2173 0.680074 14.624 0.802719 14.056C0.925365 13.488 1.25496 12.986 1.72736 12.6476C2.03498 12.4317 2.28609 12.145 2.45945 11.8115C2.63281 11.4781 2.72331 11.1079 2.72331 10.7321C2.72331 10.3563 2.63281 9.98602 2.45945 9.6526C2.28609 9.31918 2.03498 9.03242 1.72736 8.81657C1.25562 8.47802 0.926609 7.97617 0.804261 7.40856C0.681912 6.84094 0.774968 6.24811 1.06534 5.74529C1.35572 5.24246 1.82267 4.86555 2.37545 4.68781C2.92823 4.51008 3.52734 4.54421 4.05636 4.78357C4.39712 4.94231 4.7711 5.01661 5.14666 5.00019C5.52222 4.98378 5.88829 4.87712 6.2139 4.68925C6.5395 4.50138 6.81505 4.23783 7.01722 3.92091C7.2194 3.60399 7.34224 3.24303 7.37536 2.86857" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 6.75C5.40685 6.75 6.75 5.40685 6.75 3.75C6.75 2.09315 5.40685 0.75 3.75 0.75C2.09315 0.75 0.75 2.09315 0.75 3.75C0.75 5.40685 2.09315 6.75 3.75 6.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Search|Accent": `
    <div class="oc-icons oc-icons--icon-search oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.09 5.09L0.75 0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 16.75C13.1683 16.75 16.75 13.1683 16.75 8.75C16.75 4.33172 13.1683 0.75 8.75 0.75C4.33172 0.75 0.75 4.33172 0.75 8.75C0.75 13.1683 4.33172 16.75 8.75 16.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Bell|Accent": `
    <div class="oc-icons oc-icons--icon-bell oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.750244 0.750244C0.925788 1.05426 1.17826 1.30671 1.48229 1.48223C1.78632 1.65775 2.13119 1.75016 2.48224 1.75016C2.8333 1.75016 3.17817 1.65775 3.4822 1.48223C3.78623 1.30671 4.0387 1.05426 4.21424 0.750244" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.01127 14.076C0.880634 14.2192 0.794423 14.3972 0.763125 14.5885C0.731826 14.7798 0.756789 14.976 0.834976 15.1534C0.913163 15.3307 1.0412 15.4816 1.20352 15.5875C1.36585 15.6934 1.55545 15.7499 1.74927 15.75H17.7493C17.9431 15.7501 18.1327 15.6938 18.2951 15.5881C18.4576 15.4824 18.5858 15.3317 18.6642 15.1545C18.7426 14.9773 18.7678 14.7811 18.7367 14.5898C18.7057 14.3985 18.6197 14.2203 18.4893 14.077C17.1593 12.706 15.7493 11.249 15.7493 6.75C15.7493 5.1587 15.1171 3.63258 13.9919 2.50736C12.8667 1.38214 11.3406 0.75 9.74927 0.75C8.15797 0.75 6.63185 1.38214 5.50663 2.50736C4.38141 3.63258 3.74927 5.1587 3.74927 6.75C3.74927 11.249 2.33827 12.706 1.01127 14.076Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Filter|Accent": `
    <div class="oc-icons oc-icons--icon-filter oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.74964 17.75C8.74955 17.9358 8.80125 18.118 8.89893 18.2761C8.99661 18.4342 9.13641 18.5619 9.30264 18.645L11.3026 19.645C11.4551 19.7212 11.6246 19.7572 11.7949 19.7494C11.9652 19.7417 12.1307 19.6906 12.2757 19.6009C12.4207 19.5113 12.5403 19.386 12.6233 19.2371C12.7062 19.0881 12.7497 18.9205 12.7496 18.75V11.75C12.7499 11.2544 12.9341 10.7765 13.2666 10.409L20.4896 2.42C20.6191 2.27656 20.7042 2.09868 20.7347 1.90788C20.7652 1.71708 20.7398 1.52153 20.6615 1.34487C20.5833 1.16822 20.4555 1.01802 20.2936 0.912452C20.1318 0.806881 19.9429 0.750456 19.7496 0.75H1.74964C1.55625 0.75007 1.36702 0.806216 1.20489 0.911636C1.04276 1.01706 0.914669 1.16723 0.836144 1.34396C0.757619 1.5207 0.732026 1.71641 0.762464 1.90739C0.792902 2.09837 0.878066 2.27643 1.00764 2.42L8.23264 10.409C8.56518 10.7765 8.74942 11.2544 8.74964 11.75V17.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Minimize|Accent": `
    <div class="oc-icons oc-icons--icon-minimize oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H14.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Maximize|Accent": `
    <div class="oc-icons oc-icons--icon-maximize oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 0.75H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V16.75C0.75 17.8546 1.64543 18.75 2.75 18.75H16.75C17.8546 18.75 18.75 17.8546 18.75 16.75V2.75C18.75 1.64543 17.8546 0.75 16.75 0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Clock|Regular": `
    <div class="oc-icons oc-icons--icon-clock oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5V6.5L4.5 8.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Circle|Regular": `
    <div class="oc-icons oc-icons--icon-circle oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Warning|Regular": `
    <div class="oc-icons oc-icons--icon-warning oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.248 15.5139L12.248 1.5139C12.0736 1.2061 11.8206 0.950084 11.5149 0.771965C11.2092 0.593846 10.8618 0.5 10.508 0.5C10.1542 0.5 9.80675 0.593846 9.50107 0.771965C9.19539 0.950084 8.94243 1.2061 8.768 1.5139L0.767996 15.5139C0.591678 15.8193 0.499224 16.1658 0.500005 16.5184C0.500786 16.871 0.594774 17.2171 0.772442 17.5217C0.950111 17.8263 1.20514 18.0785 1.51169 18.2527C1.81824 18.427 2.1654 18.5171 2.518 18.5139H18.518C18.8689 18.5135 19.2135 18.4209 19.5173 18.2452C19.821 18.0695 20.0732 17.817 20.2485 17.513C20.4238 17.209 20.516 16.8643 20.5159 16.5134C20.5159 16.1625 20.4234 15.8178 20.248 15.5139Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="1" height="5" viewBox="0 0 1 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5V4.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="2" height="1" viewBox="0 0 2 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H0.51" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "CircleCheck|Regular": `
    <div class="oc-icons oc-icons--icon-circle-check oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 2.5L2.5 4.5L6.5 0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Bolt|Regular": `
    <div class="oc-icons oc-icons--icon-bolt oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4137 2.49918C12.5268 2.17854 12.5277 1.82898 12.4161 1.50779C12.3045 1.18661 12.0872 0.912854 11.7996 0.731416C11.512 0.549977 11.1714 0.471619 10.8334 0.509186C10.4955 0.546753 10.1804 0.698016 9.93968 0.938179L0.939681 9.93818C0.729825 10.1479 0.586875 10.4151 0.528909 10.7061C0.470943 10.9971 0.500565 11.2987 0.614028 11.5728C0.727492 11.847 0.9197 12.0813 1.16635 12.2462C1.41299 12.4111 1.70299 12.4991 1.99968 12.4992H6.00168C6.08156 12.4993 6.16025 12.5185 6.23116 12.5553C6.30207 12.592 6.36315 12.6453 6.40927 12.7105C6.45539 12.7757 6.48522 12.851 6.49625 12.9301C6.50728 13.0092 6.4992 13.0898 6.47268 13.1652L4.58568 18.4992C4.47249 18.8199 4.47167 19.1696 4.58336 19.4909C4.69505 19.8122 4.91261 20.0859 5.20035 20.2673C5.4881 20.4487 5.82894 20.5269 6.16697 20.4891C6.505 20.4512 6.82013 20.2997 7.06068 20.0592L16.0607 11.0592C16.2703 10.8493 16.4129 10.5821 16.4707 10.2912C16.5284 10.0003 16.4986 9.69884 16.3851 9.42487C16.2715 9.1509 16.0793 8.91674 15.8327 8.75198C15.5861 8.58721 15.2962 8.49924 14.9997 8.49918H11.0027C10.9226 8.49929 10.8437 8.48017 10.7725 8.44342C10.7014 8.40667 10.6401 8.35337 10.5938 8.288C10.5476 8.22263 10.5177 8.14711 10.5067 8.06779C10.4957 7.98846 10.5039 7.90766 10.5307 7.83218L12.4137 2.49918Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Document|Regular": `
    <div class="oc-icons oc-icons--icon-document oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 20.5C1.96957 20.5 1.46086 20.2893 1.08579 19.9142C0.710714 19.5391 0.5 19.0304 0.5 18.5V2.5C0.5 1.96957 0.710714 1.46086 1.08579 1.08579C1.46086 0.710717 1.96957 0.500003 2.5 0.500003H10.5C10.8166 0.49949 11.1301 0.561605 11.4225 0.682772C11.715 0.803939 11.9806 0.981763 12.204 1.206L15.792 4.794C16.0168 5.01751 16.1952 5.28335 16.3167 5.57616C16.4382 5.86898 16.5005 6.18297 16.5 6.5V18.5C16.5 19.0304 16.2893 19.5391 15.9142 19.9142C15.5391 20.2893 15.0304 20.5 14.5 20.5H2.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5V5.5C0.5 5.76522 0.605357 6.01957 0.792893 6.20711C0.98043 6.39464 1.23478 6.5 1.5 6.5H6.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="3" height="1" viewBox="0 0 3 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0.5H0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="9" height="1" viewBox="0 0 9 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0.5H0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-5" aria-hidden="true" focusable="false" width="9" height="1" viewBox="0 0 9 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0.5H0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "ChevronDown|Regular": `
    <div class="oc-icons oc-icons--icon-chevron-down oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L6.5 6.5L12.5 0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Plus|Regular": `
    <div class="oc-icons oc-icons--icon-plus oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H14.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="1" height="15" viewBox="0 0 1 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5V14.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "X|Regular": `
    <div class="oc-icons oc-icons--icon-x oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 0.5L0.5 12.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L12.5 12.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Edit|Regular": `
    <div class="oc-icons oc-icons--icon-edit oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6739 5.31238C20.2026 4.7838 20.4997 4.06685 20.4998 3.31923C20.4999 2.57162 20.203 1.85459 19.6744 1.32588C19.1459 0.797172 18.4289 0.500094 17.6813 0.5C16.9337 0.499906 16.2166 0.796805 15.6879 1.32538L2.34193 14.6744C2.10975 14.9059 1.93805 15.1909 1.84193 15.5044L0.520934 19.8564C0.49509 19.9429 0.493138 20.0347 0.515286 20.1222C0.537433 20.2097 0.582855 20.2896 0.646731 20.3534C0.710607 20.4172 0.790555 20.4624 0.878093 20.4845C0.965631 20.5065 1.05749 20.5044 1.14393 20.4784L5.49693 19.1584C5.8101 19.0631 6.09511 18.8925 6.32693 18.6614L19.6739 5.31238Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Trash|Regular": `
    <div class="oc-icons oc-icons--icon-trash oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="1" height="7" viewBox="0 0 1 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5V6.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="1" height="7" viewBox="0 0 1 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5V6.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0.5V14.5C14.5 15.0304 14.2893 15.5391 13.9142 15.9142C13.5391 16.2893 13.0304 16.5 12.5 16.5H2.5C1.96957 16.5 1.46086 16.2893 1.08579 15.9142C0.710714 15.5391 0.5 15.0304 0.5 14.5V0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="19" height="1" viewBox="0 0 19 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H18.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-5" aria-hidden="true" focusable="false" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 4.5V2.5C0.5 1.96957 0.710714 1.46086 1.08579 1.08579C1.46086 0.710714 1.96957 0.5 2.5 0.5H6.5C7.03043 0.5 7.53914 0.710714 7.91421 1.08579C8.28929 1.46086 8.5 1.96957 8.5 2.5V4.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Download|Regular": `
    <div class="oc-icons oc-icons--icon-download oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="1" height="13" viewBox="0 0 1 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 12.5V0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="19" height="7" viewBox="0 0 19 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 0.5V4.5C18.5 5.03043 18.2893 5.53914 17.9142 5.91421C17.5391 6.28929 17.0304 6.5 16.5 6.5H2.5C1.96957 6.5 1.46086 6.28929 1.08579 5.91421C0.710714 5.53914 0.5 5.03043 0.5 4.5V0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L5.5 5.5L10.5 0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Print|Regular": `
    <div class="oc-icons oc-icons--icon-print oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 9.5H2.5C1.96957 9.5 1.46086 9.28929 1.08579 8.91421C0.710714 8.53914 0.5 8.03043 0.5 7.5V2.5C0.5 1.96957 0.710714 1.46086 1.08579 1.08579C1.46086 0.710714 1.96957 0.5 2.5 0.5H18.5C19.0304 0.5 19.5391 0.710714 19.9142 1.08579C20.2893 1.46086 20.5 1.96957 20.5 2.5V7.5C20.5 8.03043 20.2893 8.53914 19.9142 8.91421C19.5391 9.28929 19.0304 9.5 18.5 9.5H16.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 7.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H11.5C11.7652 0.5 12.0196 0.605357 12.2071 0.792893C12.3946 0.98043 12.5 1.23478 12.5 1.5V7.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V7.5C0.5 8.05228 0.947715 8.5 1.5 8.5H11.5C12.0523 8.5 12.5 8.05228 12.5 7.5V1.5C12.5 0.947715 12.0523 0.5 11.5 0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "MoreVertical|Regular": `
    <div class="oc-icons oc-icons--icon-more-vertical oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 2.5C2.05228 2.5 2.5 2.05228 2.5 1.5C2.5 0.947715 2.05228 0.5 1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5C0.5 2.05228 0.947715 2.5 1.5 2.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 2.5C2.05228 2.5 2.5 2.05228 2.5 1.5C2.5 0.947715 2.05228 0.5 1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5C0.5 2.05228 0.947715 2.5 1.5 2.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 2.5C2.05228 2.5 2.5 2.05228 2.5 1.5C2.5 0.947715 2.05228 0.5 1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5C0.5 2.05228 0.947715 2.5 1.5 2.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Grid|Regular": `
    <div class="oc-icons oc-icons--icon-grid oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V6.5C0.5 7.05228 0.947715 7.5 1.5 7.5H6.5C7.05228 7.5 7.5 7.05228 7.5 6.5V1.5C7.5 0.947715 7.05228 0.5 6.5 0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V6.5C0.5 7.05228 0.947715 7.5 1.5 7.5H6.5C7.05228 7.5 7.5 7.05228 7.5 6.5V1.5C7.5 0.947715 7.05228 0.5 6.5 0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V6.5C0.5 7.05228 0.947715 7.5 1.5 7.5H6.5C7.05228 7.5 7.5 7.05228 7.5 6.5V1.5C7.5 0.947715 7.05228 0.5 6.5 0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V6.5C0.5 7.05228 0.947715 7.5 1.5 7.5H6.5C7.05228 7.5 7.5 7.05228 7.5 6.5V1.5C7.5 0.947715 7.05228 0.5 6.5 0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Car|Regular": `
    <div class="oc-icons oc-icons--icon-car oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 10.5H19.5C20.1 10.5 20.5 10.1 20.5 9.5V6.5C20.5 5.6 19.8 4.8 19 4.6C17.2 4.1 14.5 3.5 14.5 3.5C14.5 3.5 13.2 2.1 12.3 1.2C11.8 0.8 11.2 0.5 10.5 0.5H3.5C2.9 0.5 2.4 0.9 2.1 1.4L0.7 4.3C0.56758 4.68623 0.5 5.0917 0.5 5.5V9.5C0.5 10.1 0.9 10.5 1.5 10.5H3.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5C3.60457 4.5 4.5 3.60457 4.5 2.5C4.5 1.39543 3.60457 0.5 2.5 0.5C1.39543 0.5 0.5 1.39543 0.5 2.5C0.5 3.60457 1.39543 4.5 2.5 4.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="7" height="1" viewBox="0 0 7 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H6.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5C3.60457 4.5 4.5 3.60457 4.5 2.5C4.5 1.39543 3.60457 0.5 2.5 0.5C1.39543 0.5 0.5 1.39543 0.5 2.5C0.5 3.60457 1.39543 4.5 2.5 4.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "List|Regular": `
    <div class="oc-icons oc-icons--icon-list oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="2" height="1" viewBox="0 0 2 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H0.51" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="2" height="1" viewBox="0 0 2 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H0.51" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="2" height="1" viewBox="0 0 2 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H0.51" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-4" aria-hidden="true" focusable="false" width="14" height="1" viewBox="0 0 14 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H13.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-5" aria-hidden="true" focusable="false" width="14" height="1" viewBox="0 0 14 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H13.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-6" aria-hidden="true" focusable="false" width="14" height="1" viewBox="0 0 14 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H13.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Shield|Regular": `
    <div class="oc-icons oc-icons--icon-shield oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 11.5004C16.5 16.5004 13 19.0005 8.84 20.4505C8.62216 20.5243 8.38554 20.5207 8.17 20.4405C4 19.0005 0.5 16.5004 0.5 11.5004V4.50045C0.5 4.23523 0.605357 3.98088 0.792893 3.79334C0.98043 3.60581 1.23478 3.50045 1.5 3.50045C3.5 3.50045 6 2.30045 7.74 0.78045C7.95185 0.599448 8.22135 0.5 8.5 0.5C8.77865 0.5 9.04815 0.599448 9.26 0.78045C11.01 2.31045 13.5 3.50045 15.5 3.50045C15.7652 3.50045 16.0196 3.60581 16.2071 3.79334C16.3946 3.98088 16.5 4.23523 16.5 4.50045V11.5004Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Archive|Regular": `
    <div class="oc-icons oc-icons--icon-archive oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V4.5C0.5 5.05228 0.947715 5.5 1.5 5.5H19.5C20.0523 5.5 20.5 5.05228 20.5 4.5V1.5C20.5 0.947715 20.0523 0.5 19.5 0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5V11.5C0.5 12.0304 0.710714 12.5391 1.08579 12.9142C1.46086 13.2893 1.96957 13.5 2.5 13.5H14.5C15.0304 13.5 15.5391 13.2893 15.9142 12.9142C16.2893 12.5391 16.5 12.0304 16.5 11.5V0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-3" aria-hidden="true" focusable="false" width="5" height="1" viewBox="0 0 5 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H4.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Settings|Regular": `
    <div class="oc-icons oc-icons--icon-settings oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.12736 2.61857C7.18246 2.03891 7.45169 1.50062 7.88246 1.10885C8.31323 0.717088 8.87459 0.5 9.45686 0.5C10.0391 0.5 10.6005 0.717088 11.0313 1.10885C11.462 1.50062 11.7313 2.03891 11.7864 2.61857C11.8195 2.99303 11.9423 3.35399 12.1445 3.67091C12.3467 3.98783 12.6222 4.25138 12.9478 4.43925C13.2734 4.62712 13.6395 4.73378 14.0151 4.75019C14.3906 4.76661 14.7646 4.69231 15.1054 4.53357C15.6345 4.29335 16.234 4.25859 16.7874 4.43606C17.3407 4.61353 17.8082 4.99052 18.0989 5.49368C18.3896 5.99683 18.4826 6.59015 18.36 7.15814C18.2374 7.72614 17.9078 8.22819 17.4354 8.56657C17.1277 8.78242 16.8766 9.06918 16.7033 9.4026C16.5299 9.73602 16.4394 10.1063 16.4394 10.4821C16.4394 10.8579 16.5299 11.2281 16.7033 11.5615C16.8766 11.895 17.1277 12.1817 17.4354 12.3976C17.9078 12.736 18.2374 13.238 18.36 13.806C18.4826 14.374 18.3896 14.9673 18.0989 15.4705C17.8082 15.9736 17.3407 16.3506 16.7874 16.5281C16.234 16.7056 15.6345 16.6708 15.1054 16.4306C14.7646 16.2718 14.3906 16.1975 14.0151 16.214C13.6395 16.2304 13.2734 16.337 12.9478 16.5249C12.6222 16.7128 12.3467 16.9763 12.1445 17.2932C11.9423 17.6102 11.8195 17.9711 11.7864 18.3456C11.7313 18.9252 11.462 19.4635 11.0313 19.8553C10.6005 20.2471 10.0391 20.4641 9.45686 20.4641C8.87459 20.4641 8.31323 20.2471 7.88246 19.8553C7.45169 19.4635 7.18246 18.9252 7.12736 18.3456C7.0943 17.971 6.97146 17.6099 6.76922 17.2928C6.56699 16.9758 6.29133 16.7122 5.96559 16.5243C5.63985 16.3364 5.27363 16.2298 4.89794 16.2135C4.52225 16.1972 4.14816 16.2716 3.80736 16.4306C3.27825 16.6708 2.67869 16.7056 2.12536 16.5281C1.57203 16.3506 1.10453 15.9736 0.813843 15.4705C0.523153 14.9673 0.430074 14.374 0.552719 13.806C0.675365 13.238 1.00496 12.736 1.47736 12.3976C1.78498 12.1817 2.03609 11.895 2.20945 11.5615C2.38281 11.2281 2.47331 10.8579 2.47331 10.4821C2.47331 10.1063 2.38281 9.73602 2.20945 9.4026C2.03609 9.06918 1.78498 8.78242 1.47736 8.56657C1.00562 8.22802 0.676609 7.72617 0.554261 7.15856C0.431912 6.59094 0.524968 5.99811 0.815343 5.49529C1.10572 4.99246 1.57267 4.61555 2.12545 4.43781C2.67823 4.26008 3.27734 4.29421 3.80636 4.53357C4.14712 4.69231 4.5211 4.76661 4.89666 4.75019C5.27222 4.73378 5.63829 4.62712 5.9639 4.43925C6.2895 4.25138 6.56505 3.98783 6.76722 3.67091C6.9694 3.35399 7.09224 2.99303 7.12536 2.61857" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 6.5C5.15685 6.5 6.5 5.15685 6.5 3.5C6.5 1.84315 5.15685 0.5 3.5 0.5C1.84315 0.5 0.5 1.84315 0.5 3.5C0.5 5.15685 1.84315 6.5 3.5 6.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Search|Regular": `
    <div class="oc-icons oc-icons--icon-search oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.84 4.84L0.5 0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 16.5C12.9183 16.5 16.5 12.9183 16.5 8.5C16.5 4.08172 12.9183 0.5 8.5 0.5C4.08172 0.5 0.5 4.08172 0.5 8.5C0.5 12.9183 4.08172 16.5 8.5 16.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Bell|Regular": `
    <div class="oc-icons oc-icons--icon-bell oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="5" height="2" viewBox="0 0 5 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5C0.675544 0.804015 0.928016 1.05647 1.23204 1.23199C1.53607 1.40751 1.88094 1.49991 2.232 1.49991C2.58306 1.49991 2.92793 1.40751 3.23196 1.23199C3.53598 1.05647 3.78846 0.804015 3.964 0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg class="oc-icons__vector-2" aria-hidden="true" focusable="false" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.761269 13.826C0.630634 13.9692 0.544423 14.1472 0.513125 14.3385C0.481826 14.5298 0.506789 14.726 0.584976 14.9034C0.663163 15.0807 0.791205 15.2316 0.953525 15.3375C1.11585 15.4434 1.30545 15.4999 1.49927 15.5H17.4993C17.6931 15.5001 17.8827 15.4438 18.0451 15.3381C18.2076 15.2324 18.3358 15.0817 18.4142 14.9045C18.4926 14.7273 18.5178 14.5311 18.4867 14.3398C18.4557 14.1485 18.3697 13.9703 18.2393 13.827C16.9093 12.456 15.4993 10.999 15.4993 6.5C15.4993 4.9087 14.8671 3.38258 13.7419 2.25736C12.6167 1.13214 11.0906 0.5 9.49927 0.5C7.90797 0.5 6.38185 1.13214 5.25663 2.25736C4.13141 3.38258 3.49927 4.9087 3.49927 6.5C3.49927 10.999 2.08827 12.456 0.761269 13.826Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Filter|Regular": `
    <div class="oc-icons oc-icons--icon-filter oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49964 17.5C8.49955 17.6858 8.55125 17.868 8.64893 18.0261C8.74661 18.1842 8.88641 18.3119 9.05264 18.395L11.0526 19.395C11.2051 19.4712 11.3746 19.5072 11.5449 19.4994C11.7152 19.4917 11.8807 19.4406 12.0257 19.3509C12.1707 19.2613 12.2903 19.136 12.3733 18.9871C12.4562 18.8381 12.4997 18.6705 12.4996 18.5V11.5C12.4999 11.0044 12.6841 10.5265 13.0166 10.159L20.2396 2.17C20.3691 2.02656 20.4542 1.84868 20.4847 1.65788C20.5152 1.46708 20.4898 1.27153 20.4115 1.09487C20.3333 0.918218 20.2055 0.768023 20.0436 0.662452C19.8818 0.556881 19.6929 0.500456 19.4996 0.5H1.49964C1.30625 0.50007 1.11702 0.556216 0.954889 0.661636C0.792755 0.767057 0.664669 0.917229 0.586144 1.09396C0.507619 1.2707 0.482026 1.46641 0.512464 1.65739C0.542902 1.84837 0.628066 2.02643 0.757639 2.17L7.98264 10.159C8.31518 10.5265 8.49942 11.0044 8.49964 11.5V17.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Minimize|Regular": `
    <div class="oc-icons oc-icons--icon-minimize oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H14.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Maximize|Regular": `
    <div class="oc-icons oc-icons--icon-maximize oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V16.5C0.5 17.6046 1.39543 18.5 2.5 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V2.5C18.5 1.39543 17.6046 0.5 16.5 0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Check|Regular": `
    <div class="oc-icons oc-icons--icon-check oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 0.5L5.5 11.5L0.5 6.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Check|Accent": `
    <div class="oc-icons oc-icons--icon-check oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 0.75L5.75 11.75L0.75 6.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "ChevronLeft|Regular": `
    <div class="oc-icons oc-icons--icon-chevron-left oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12.5L0.5 6.5L6.5 0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "ChevronLeft|Accent": `
    <div class="oc-icons oc-icons--icon-chevron-left oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 12.75L0.75 6.75L6.75 0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "ChevronRight|Regular": `
    <div class="oc-icons oc-icons--icon-chevron-right oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "ChevronRight|Accent": `
    <div class="oc-icons oc-icons--icon-chevron-right oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 12.75L6.75 6.75L0.75 0.75" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Board|Regular": `
    <div class="oc-icons oc-icons--icon-board oc-icons--style-regular">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.27778 0.5H0.5V8.27778H8.27778V0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 0.5H12.7222V8.27778H20.5V0.5Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.27778 12.7222H0.5V20.5H8.27778V12.7222Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12.7222H12.7222V20.5H20.5V12.7222Z" style="stroke:var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Board|Accent": `
    <div class="oc-icons oc-icons--icon-board oc-icons--style-accent">
      <svg class="oc-icons__vector" aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.52778 0.75H0.75V8.52778H8.52778V0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.75 0.75H12.9722V8.52778H20.75V0.75Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.52778 12.9722H0.75V20.75H8.52778V12.9722Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.75 12.9722H12.9722V20.75H20.75V12.9722Z" style="stroke:var(--text-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `
};

const CAPTIONS = ["Icon=Clock, Style=Accent","Icon=Circle, Style=Accent","Icon=Warning, Style=Accent","Icon=CircleCheck, Style=Accent","Icon=Bolt, Style=Accent","Icon=Document, Style=Accent","Icon=ChevronDown, Style=Accent","Icon=Plus, Style=Accent","Icon=X, Style=Accent","Icon=Edit, Style=Accent","Icon=Trash, Style=Accent","Icon=Download, Style=Accent","Icon=Print, Style=Accent","Icon=MoreVertical, Style=Accent","Icon=Grid, Style=Accent","Icon=Car, Style=Accent","Icon=List, Style=Accent","Icon=Shield, Style=Accent","Icon=Archive, Style=Accent","Icon=Settings, Style=Accent","Icon=Search, Style=Accent","Icon=Bell, Style=Accent","Icon=Filter, Style=Accent","Icon=Minimize, Style=Accent","Icon=Maximize, Style=Accent","Icon=Clock, Style=Regular","Icon=Circle, Style=Regular","Icon=Warning, Style=Regular","Icon=CircleCheck, Style=Regular","Icon=Bolt, Style=Regular","Icon=Document, Style=Regular","Icon=ChevronDown, Style=Regular","Icon=Plus, Style=Regular","Icon=X, Style=Regular","Icon=Edit, Style=Regular","Icon=Trash, Style=Regular","Icon=Download, Style=Regular","Icon=Print, Style=Regular","Icon=MoreVertical, Style=Regular","Icon=Grid, Style=Regular","Icon=Car, Style=Regular","Icon=List, Style=Regular","Icon=Shield, Style=Regular","Icon=Archive, Style=Regular","Icon=Settings, Style=Regular","Icon=Search, Style=Regular","Icon=Bell, Style=Regular","Icon=Filter, Style=Regular","Icon=Minimize, Style=Regular","Icon=Maximize, Style=Regular","Icon=Check, Style=Regular","Icon=Check, Style=Accent","Icon=ChevronLeft, Style=Regular","Icon=ChevronLeft, Style=Accent","Icon=ChevronRight, Style=Regular","Icon=ChevronRight, Style=Accent","Icon=Board, Style=Regular","Icon=Board, Style=Accent"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Foundations/Icons",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «Icons»\n\nСобрано из спеки Figma `56:2356` (страница Core).\nКорень `<div>`, базовый класс `.oc-icons`. Вариантов: 58. Непривязанных значений: 98 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Icon": {
      description: "Свойство варианта Figma «Icon»",
      control: { type: "inline-radio" },
      options: ["Clock","Circle","Warning","CircleCheck","Bolt","Document","ChevronDown","Plus","X","Edit","Trash","Download","Print","MoreVertical","Grid","Car","List","Shield","Archive","Settings","Search","Bell","Filter","Minimize","Maximize","Check","ChevronLeft","ChevronRight","Board"],
    },
    "Style": {
      description: "Свойство варианта Figma «Style»",
      control: { type: "inline-radio" },
      options: ["Accent","Regular"],
    },
  },
  args: {
    "Icon": "Clock",
    "Style": "Regular",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Icon"] + "|" + args["Style"]] ?? "<p>нет такой комбинации</p>";
    for (const [cls, prop] of Object.entries(TEXT_PARTS)) {
      if (!(prop in args)) continue;
      for (const el of wrap.getElementsByClassName(cls)) el.textContent = args[prop];
    }
    for (const [cls, prop] of Object.entries(OPTIONAL_PARTS)) {
      if (args[prop] !== false) continue;
      for (const el of [...wrap.getElementsByClassName(cls)]) el.remove();
    }
    return wrap.firstElementChild ?? wrap;
  },
};

// Витрина матрицы прибита к значениям из спеки: она же опора для замера габаритов в
// verify-code.mjs. Протёк бы сюда пользовательский Label — ширина поехала бы, и сверка с
// figmaSize начала бы врать.
export const AllVariants = {
  parameters: { controls: { disable: true } },
  render: () => Object.values(VARIANTS)
    .map((html, i) => `<figure style="margin:0 0 24px">${html}<figcaption style="font:12px/1.6 ui-monospace,monospace;color:#8a8987;margin-top:8px">${CAPTIONS[i]}</figcaption></figure>`)
    .join(""),
};
