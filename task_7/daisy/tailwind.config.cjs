module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["aqua","cupcake","dracula", "valentine", "dark", "light", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "halloween", "garden", "forest", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "cmyk", "autumn", "business", "acid", "lemonade"],
  },
}
