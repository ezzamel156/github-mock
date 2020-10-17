module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.blue.600'),
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          img: {
            display: 'inline-block',
          },
          hr: {
            borderColor: theme('colors.gray.400'),
            marginTop: '2em',
            marginBottom: '2em',
          }

        },
      },
    }),
    extend: {},
  },
  variants: {
    textColor: ({ after }) => after(['group-hover']),
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
