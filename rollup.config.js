import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps';

import { main, es, umd } from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: main,
			format: 'cjs'
		},
		{
			file: es,
			format: 'es'
		},
		{
			file: umd,
			format: 'umd',
			name: 'crypto'
		}
	],
	plugins: [
		typescript({
			typescript: require('typescript'),
			exclude: 'node_modules/**'
		}),

		resolve({
			jsnext: true,
			main: true
		}),

		commonjs({
			include: 'node_modules/**'
		}),

		sourcemaps()
	]
}