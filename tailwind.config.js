module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: '#F2E9D0',
      backgrounddark: '#EACEB4',
      mtitle: '#661414',
      title: '#B68973',
      text: '#1E212D',
      // ...
    },
    fontFamily: {
      sans: ['Montserrat'],
      title: ['Lora'],
      header: ['Josefin Sans'],
      mono: ['Montserrat'],
      display: ['Montserrat'],
      body: ['Montserrat']
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
