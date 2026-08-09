# FINCHX Journey Asset Library

This directory is the production source for visual assets used by the Business Growth Journey. Placeholder files are intentionally empty until approved artwork replaces them.

## Folder purpose

- `background/`: Fixed scene foundations, platform layers, ambient light, and ambient shadows.
- `cards/`: Transparent glass information cards for each journey stage.
- `pins/`: Transparent location-pin renders for each journey stage.
- `paths/`: SVG route geometry, masks, and glow definitions. Paths must use the same coordinate system as the approved journey artwork.
- `particles/`: Small, medium, and large particles plus restrained ambient dust.
- `effects/`: The goal flag and reusable energy, spark, flare, and halo elements.
- `icons/`: Approved journey-specific interface symbols.
- `placeholders/`: Temporary preview assets that must never ship as final artwork.

## Naming convention

Use lowercase kebab-case names: `<stage>-<asset>.webp` for raster assets and `<purpose>.svg` for vector assets. Stage names must match the journey configuration: `discovery`, `strategy`, `planning`, `execution`, `optimization`, and `results`. Avoid version numbers in filenames; source control tracks revisions.

## Image dimensions

- Backgrounds: author at the approved master aspect ratio, preferably 3072×2048 for 2× output.
- Cards: target 800–1200px on the longest edge at 2×.
- Pins and effects: target 256–512px square at 2×.
- Particles: target 32–128px square at 2×.

Keep consistent transparent padding around related assets so transforms remain visually anchored.

## Transparency

Cards, pins, particles, effects, icons, ambient light, and ambient shadow assets require transparent backgrounds. Do not bake page colors, gradients, or opaque matte edges into exported artwork.

## Compression

Export raster assets as lossless or high-quality WebP. Remove metadata and color profiles that are not required for correct rendering. Inspect glass edges, fine type, and alpha transitions after compression; visible banding or halos are not acceptable.

## Retina support

Author and export raster artwork at 2× its maximum rendered dimensions. CSS and component dimensions should represent the intended 1× display size. Avoid upscaling assets at runtime.

## Animation compatibility

Keep moving elements separated from fixed backgrounds. Use stable canvas dimensions, consistent anchor points, and generous transparent bounds for transforms. Assets intended for transform or opacity animation must not include neighboring scene elements or baked motion blur. SVG paths should contain clean route geometry without generated decorative artwork.
