# gatsby-plugin-tiktok
Loads the TikTok JavaScript and CSS necessary for embedding TikTok videos into your Gatsby site without the need for the <script> tag.

## Install
`npm install gatsby-plugin-tiktok`

## Configure
```js
// In your gatsby-config.js
plugins: [`gatsby-plugin-tiktok`]
```
## How to Use
1. Find the TikTok you'd like to embed (You must be on the browser).
2. At the bottom right, highlight the share-arrow and click "embed" at the top
3. Copy the embed code displayed to you and paste it into your site's html.

## Why is this necesary?
Attempts to use the React virtual DOM to render `<script />` tags will **not** execute/load their intended JavaScript. This is because React, under the hood, uses `createElement()` to render the JSX and rendering `<script />`s with `createElement()` is a security risk. Thus, adding a `<script />` tag to your JSX won't embed any JavaScript. Using gatsby plugins we can circumvent this by adding it to the head of our document programmatically client-side.