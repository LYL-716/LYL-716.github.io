# Design

## Direction

An engineering workbench for a public personal project archive. The interface should feel closer to a maintenance manual and project index than to a personal portfolio. Facts, status, parts, entry points, and evidence take priority over decorative presentation.

## Palette

- Ink: `#16231f`
- Ink soft: `#34433d`
- Muted: `#68756f`
- Paper: `#f6f5ef`
- Sheet: `#fffdf7`
- Field: `#e9ede7`
- Line: `#c5cec6`
- Signal orange: `#e45b22`
- Circuit teal: `#0f887f`

The orange is used for primary actions, numbering, status emphasis, and active marks. Teal is used for links, circuit language, completion, and secondary state. The page is not a one-color dark or orange theme.

## Typography

- UI text: `Segoe UI`, `Microsoft YaHei UI`, and `Microsoft YaHei`.
- Display and technical labels: `Bahnschrift` with `Arial Narrow` fallback.
- Code: `Cascadia Code` with `Consolas` fallback.

Headings use tight but non-negative letter spacing. Code and identifiers use monospace only where they represent code, protocol, or measurement.

## Composition

- The root page is a project index with a wide opening status band, not a marketing hero.
- Project entries are horizontal workbench records on wide screens and stacked records on narrow screens.
- The vacuum robot guide uses a persistent step rail on wide tablets and a drawer-style rail on portrait or phone screens.
- A project always has a status, date, tags, route, and technical context.

## Components

- Project records use square corners, thin graphite borders, one strong offset shadow, and a stamped project number.
- Published and draft states use text labels and color: teal for published, orange for in progress.
- Project covers use real project imagery or a code panel. They do not use generic icon tiles.
- The vacuum guide uses large instruction images, action lists, warning panels, and a locally persisted completion state.

## Motion

- One entrance motion introduces project records or a new guide sheet.
- Progress uses `transform: scaleX()` rather than animating layout width.
- The mobile step rail moves with a single transform transition.
- Reduced-motion mode removes entrance and scroll motion.

## Responsive Rules

- Desktop: project records form a three-column internal grid; the guide retains a left rail.
- Tablet: project records stack the image and text; the guide becomes a drawer.
- Phone: all columns become single-column, actions become full-width, and the guide uses a two-row sticky step controller.

## Accessibility

- Touch targets are at least 42–50 px high.
- Focus uses an orange outline with visible offset.
- Text and controls maintain high contrast.
- The guide can be navigated with keyboard arrows.
- No text depends on hover to be understood.

## Adding Projects

A new project needs:

1. A directory under the repository root.
2. An `index.html` entry page.
3. One record in `projects.js`.
4. An optional cover image inside that project's directory.

It should inherit the palette, square geometry, technical typography, and status language above.
