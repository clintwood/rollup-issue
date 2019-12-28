import resolve from 'rollup-plugin-node-resolve';

// const format = 'cjs';
const format = 'esm';

// export config
export default [
  // entry points
  {
    input: {
      app: './src/app.js',
      Core: './src/bundles/Core/index.js',
      Intro: './src/bundles/Intro/index.js',
      Main: './src/bundles/Main/index.js',
    },
    output: {
      sourcemap: false,
      format,
      dir: './build/entrypoints',
    },
    // manualChunks,
    plugins: [
      resolve(),
    ],
  },

  // manual chunks
  {
    input: './src/app.js',
    output: {
      sourcemap: false,
      format,
      dir: './build/manual',
      chunkFileNames: '[name].js',
    },
    manualChunks,
    plugins: [
      resolve(),
    ],
  }
]

const bundleNames = [
  'Core',
  'Intro',
  'Main',
];

function manualChunks(id) {
  return bundleNames.find((name) => id.includes(`/${name}/`));
}
