# APM Digital Experience 2027 — Visual Review Log

**Version:** V3 refinement (November 2026)  
**Project type:** Independent, unofficial portfolio concept  
**Scope:** Frontend only, built on HTML5, Bootstrap 5, CSS and Vanilla JS

## Review method and confidence

This review examined the HTML, CSS and JavaScript deployed from the `main` branch. Image-source pages and licence details were also checked for two new portfolio images. A hosted-page screenshot and browser-rendered visual inspection **could not be obtained** using the available environment.

Therefore:
- **Verified in source** = directly observable in checked-in code.
- **Design hypothesis** = a likely UX risk inferred from structure/CSS; must be confirmed in a browser.
- **Pending** = requires desktop/mobile visual, keyboard or performance QA.

## Findings and implemented decisions

| Priority | Finding | Evidence / confidence | V3 response | Expected impact |
| --- | --- | --- | --- | --- |
| P1 | Desktop navigation may crowd at 992–1150px | Source-based layout risk; visual check pending | Collapse full navigation below 1151px; synchronize JS resize threshold | Reduce clipping and unwanted wrapping |
| P1 | Heritage imagery was too generic for the APM theme | Generic placeholder asset selection verified in HTML | Replace two visuals with identifiable cultural imagery and record their origins | Stronger subject-matter relevance |
| P2 | Utility text, programme labels and some small-copy colours risk low legibility | CSS sizes and colours verified | Increase selective 9–10px labels, darken warm accent tones and improve contrast | Better reading experience |
| P2 | Vertical whitespace applied too generously across all long-page sections | CSS `padding` verified | Refine section rhythm to a responsive 82–124px envelope | Faster visual scanning without crowding |
| P2 | Portfolio concept could be mistaken for the institution's official redesign | Source text verified | Make the APM concept mark and portfolio disclosure clearer | More transparent case study |
| P2 | Image treatment lacked cohesion | CSS/image selection verified | Tune desaturation and warm editorial toning, keep accessible image alternatives | More consistent art direction |
| P3 | Main heading is large and may overflow at intermediate widths | Responsive typography hypothesis | Loosen wrapping in 768–1150px range, reduce narrow-screen display size | Reduce likely horizontal overflow |

## Visual rationale

**Modern academic editorial** remains the dominant direction. V3 is not a wholesale redesign. It makes the existing V2 more usable and grounded in the Malay heritage subject: fewer unrelated stock images, more legible utility labels, clearer screen-size behaviour and fewer decorative elements competing with primary content.

The warm ivory background and midnight-blue text remain, with the darkened gold accents reserved for emphasis. Display type uses Cormorant Garamond; body text and controls use DM Sans. Typography is evaluated for hierarchy rather than fashion.

## Asset sources

The following two external Unsplash images are used as conceptual photography, **not** photographs of APM or Universiti Malaya:

1. [Ainur Iman — traditional Malay house in Malaysia](https://unsplash.com/photos/brown-wooden-house-near-green-trees-during-daytime-BNlHp0VbpTQ) — Unsplash License. Used on the *Pengajian Melayu* programme card.
2. [Europeana — historical batik pattern / Pong garuda](https://unsplash.com/photos/intricate-batik-fabric-with-bird-and-floral-motifs-YPzH_a1xCN8) — described as public-domain/CC0 on source. Used as an art-direction texture in the hero. It represents wider Nusantara textile heritage; it is **not** presented as a uniquely Malaysian motif.

Other Unsplash photographs in the prototype remain conceptual placeholders. For a production website, obtain authorised official photography, verify all asset rights, and replace placeholder illustrations/content.

## Browser QA backlog (required before marking the visual audit complete)

| Test width | What to inspect |
| --- | --- |
| 320px | H1 wrapping, horizontal scrolling, stamp/secondary image overlap, button width |
| 390px | Hero photo crop, primary CTA hierarchy, card labels and footer columns |
| 430px | Hero image composition, quick-access spacing, card/image proportions |
| 768px | Two-column hero breakpoint, mobile navigation panel, programmes grid |
| 1024px | Collapsed navigation trigger, intermediate H1 wrapping, art/text balance |
| 1440px | Heading/photo proportion, first-viewport hierarchy, section rhythm |
| 1920px | Large monitor max-width, image resolution, blank margins |

### Interactions and accessibility to verify in-browser

- Keyboard: skip link, focus rings, collapsed nav Enter/Space, Escape to close, sequential focus order.
- Screen reader: navigation button's announced expanded/collapsed state, semantic heading structure and meaningful image alternatives.
- Motion: reduced-motion system preference should remove reveal movement and use instant/auto scroll.
- Performance: network image failures, Cumulative Layout Shift, LCP, font loading and mobile data usage.
- Colour: check representative text/background pairs and all hover/focus states against WCAG 2.2 AA.
- Content: replace the sample editorial content and imagery if the concept is ever proposed for real institutional use.

## Non-goals

No production CMS, database, logins, admissions systems, UM API integration, real link destinations, or official university endorsement.
