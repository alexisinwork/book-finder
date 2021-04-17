// import CracoLessPlugin from 'craco-less';

module.exports = {
  plugins: [
    {
      /* eslint-disable-next-line */
      plugin: require('craco-less'),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#f582ae',
              '@link-color': '#f582ae',
              '@font-size-base': '14px',
              '@heading-color': '#f582ae',
              '@text-color': '#172c66',
              '@text-color-secondary': '#eebbc3',
              '@border-radius-base': '2px',
              '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
              '@border-color-base': '#001858',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
