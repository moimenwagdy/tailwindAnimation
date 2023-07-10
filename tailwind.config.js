const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["../tailwindCSS-animationTraining/**/*.{html,js}"],
  purge: [
    "./tailwindCSS-animationTraining/**/*.{js,jsx,ts,tsx}",
    "../tailwindCSS-animationTraining/**/*.html",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        "slide-more": {
          "25%": { transform: `translateY(470px)rotate(270deg) ` },
          "50%": {
            transform: `translateY(470px) translateX(337px)rotate(-270deg) `,
          },
          "75%": { transform: `translateY(470px)rotate(270deg) ` },
          "100%": { transform: `translateY(0px)rotate(-270deg) ` },
        },
        "slide-ME": {
          "10%": { transform: `translateX(-337.5px) rotate(180deg)` },
          "20%": {
            transform: `translateX(-337.5px) translateY(235px) rotate(90deg)`,
          },
          "30%": {
            transform: `translateX(-337.5px) translateY(235px) translateX(337.5px) rotate(180deg)`,
          },
          "40%": {
            transform: `translateX(-337.5px) translateY(235px) rotate(90deg)`,
          },
          "50%": {
            transform: `translateX(-337.5px) translateY(235px) translateY(235px) rotate(-90deg) `,
          },
          "60%": {
            transform: `translateX(-337.5px) translateY(235px) translateY(235px) translateX(337.5px) rotate(90deg)`,
          },
          "70%": {
            transform: `translateX(-337.5px) translateY(235px) translateY(235px) rotate(-90deg)`,
          },
          "80%": {
            transform: `translateX(-337.5px) translateY(235px) translateY(235px) translateY(-235px)  rotate(90deg)`,
          },
          "90%": {
            transform: `translateX(-337.5px) translateY(235px) translateY(235px) translateY(-235px) translateY(-235px) rotate(-90deg) `,
          },
          "100%": {
            transform: `rotate(180deg)`,
          },
        },

        "spin-slow": {
          "0%, 100%": { transform: "rotate(180deg)" },
          "50%": { transform: "rotate(-180deg)" },
        },
        "random-move": {
          "0%, 100%": {
            transform: `translateX(${(Math.random() * 745).toFixed(
              1
            )}px) translateY(${(Math.random() * 500).toFixed(1)}px)`,
          },
          "30%": {
            transform: `translateX(${(Math.random() * 256).toFixed(
              1
            )}px) translateY(${(Math.random() * 748).toFixed(1)}px)`,
          },
          "60%": {
            transform: `translateX(${(Math.random() * 256).toFixed(
              1
            )}px) translateY(${(Math.random() * 458).toFixed(1)}px)`,
          },
          "90%": {
            transform: `translateX(${(Math.random() * 75).toFixed(
              1
            )}px) translateY(${(Math.random() * 635).toFixed(1)}px)`,
          },
        },
        "random-move-2": {
          "0%, 100%": {
            transform: `translateX(${(Math.random() * 211).toFixed(
              1
            )}px) translateY(${(Math.random() * 326).toFixed(1)}px)`,
          },
          "30%": {
            transform: `translateX(${(Math.random() * 200).toFixed(
              1
            )}px) translateY(${(Math.random() * 400).toFixed(1)}px)`,
          },
          "60%": {
            transform: `translateX(${(Math.random() * 25).toFixed(
              1
            )}px) translateY(${(Math.random() * 441).toFixed(1)}px)`,
          },
          "90%": {
            transform: `translateX(${(Math.random() * 686).toFixed(
              1
            )}px) translateY(${(Math.random() * 451).toFixed(1)}px)`,
          },
        },
        "random-move-3": {
          "0%, 100%": {
            transform: `translateX(${(Math.random() * 1200).toFixed(
              1
            )}px) translateY(${(Math.random() * 200).toFixed(1)}px)`,
          },
          "30%": {
            transform: `translateX(${(Math.random() * 150).toFixed(
              1
            )}px) translateY(${(Math.random() * 350).toFixed(1)}px)`,
          },
          "60%": {
            transform: `translateX(${(Math.random() * 700).toFixed(
              1
            )}px) translateY(${(Math.random() * 255).toFixed(1)}px)`,
          },
          "90%": {
            transform: `translateX(${(Math.random() * 26).toFixed(
              1
            )}px) translateY(${(Math.random() * 144).toFixed(1)}px)`,
          },
        },
        "random-move-4": {
          "0%, 100%": {
            transform: `translateY(${(Math.random() * 122).toFixed(1)}px)
               translateX(${(Math.random() * 311).toFixed(1)}px)`,
          },
          "5%": {
            transform: `translateX(${(Math.random() * 411).toFixed(
              1
            )}px) translateY(${(Math.random() * 155).toFixed(1)}px)`,
          },
          "10%": {
            transform: `translateX(${(Math.random() * 411).toFixed(
              1
            )}px) translateY(${(Math.random() * 155).toFixed(1)}px)`,
          },
          "20%": {
            transform: `translateX(${(Math.random() * 411).toFixed(
              1
            )}px) translateY(${(Math.random() * 155).toFixed(1)}px)`,
          },
          "30%": {
            transform: `translateX(${(Math.random() * 24).toFixed(
              1
            )}px) translateY(${(Math.random() * 422).toFixed(1)}px)`,
          },
          "40%": {
            transform: `translateX(${(Math.random() * 321).toFixed(
              1
            )}px) translateY(${(Math.random() * 423).toFixed(1)}px)`,
          },
          "50%": {
            transform: `translateX(${(Math.random() * 32).toFixed(
              1
            )}px) translateY(${(Math.random() * 75).toFixed(1)}px)`,
          },
          "60%": {
            transform: `translateX(${(Math.random() * 33).toFixed(
              1
            )}px) translateY(${(Math.random() * 75).toFixed(1)}px)`,
          },
          "70%": {
            transform: `translateX(${(Math.random() * 53).toFixed(
              1
            )}px) translateY(${(Math.random() * 75).toFixed(1)}px)`,
          },
          "80%": {
            transform: `translateX(${(Math.random() * 25).toFixed(
              1
            )}px) translateY(${(Math.random() * 78).toFixed(1)}px)`,
          },
          "90%": {
            transform: `translateX(${(Math.random() * 12).toFixed(
              1
            )}px) translateY(${(Math.random() * 78).toFixed(1)}px)`,
          },
        },
      },
      animation: {
        "random-move": "random-move 40s ease-in-out infinite",
        "random-move-2": "random-move-2 40s ease-in-out infinite",
        "random-move-3": "random-move-3 40s ease-in-out infinite",
        "random-move-4": "random-move-4 40s ease-in-out infinite",
        "spin-slow": "  spin-slow 3s ease-in-out infinite",
        "slide-ME": " slide-ME 16s ease-in-out infinite ",
        "slide-more": " slide-more 8s ease-in-out infinite",
      },
      listStyleImage: {
        tiktok: 'url("/images/www.png")',
      },
      fontSize: {},
      fontFamily: {
        newOne: "Dancing Script",
        lastOne: "Freehand",
      },
      colors: {},
    },
  },
  plugins: [],
  safelist: [],
};
