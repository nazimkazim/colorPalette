export default {
  up() {},

  down(size) {
    const sizes = {
      xs: '575.98px',
      md: '767.98px',
      sm: '991.98px',
      lg: '1198.98px'
    };
    return `@media (max-width:${sizes[size]})`;
  }
};
