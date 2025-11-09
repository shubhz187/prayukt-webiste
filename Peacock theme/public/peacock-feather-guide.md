# Adding Your Own Peacock Feather Image

To replace the CSS-based peacock feather with your own image:

## Option 1: Quick Replace
1. Save your peacock feather image in the `public` folder (e.g., `peacock-feather.png`)
2. In `src/index.css`, find the `body::after` rule (around line 62)
3. Replace the `background-image` property with:

```css
body::after {
  background-image: url('/peacock-feather.png');
  background-repeat: no-repeat;
  background-size: contain;
  /* Keep other properties the same */
}
```

## Option 2: Multiple Feathers
For a pattern effect with multiple feathers:

```css
body::after {
  background-image: url('/peacock-feather.png');
  background-repeat: repeat-y;
  background-size: 300px auto;
  /* Adjust size as needed */
}
```

## Recommended Image Specifications:
- **Format**: PNG with transparency
- **Size**: 400-600px wide
- **Orientation**: Vertical
- **Background**: Transparent
- **Opacity**: You can adjust the overall opacity in the CSS (currently 0.4)

## Adjust Opacity:
Change the `opacity` value in `body::after`:
- `0.2` = Very subtle
- `0.4` = Subtle (current)
- `0.6` = More visible

## Change Position:
- Right side (current): `right: -10%;`
- Left side: `left: -10%; right: auto;`
- Both sides: Create another `body::after` with a different class

## Free Peacock Feather Images:
You can download high-quality peacock feather images from:
- Unsplash.com
- Pexels.com
- Pixabay.com

Search for "peacock feather transparent" or "peacock feather isolated"

