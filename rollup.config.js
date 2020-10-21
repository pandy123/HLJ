
import transpile from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import { string } from 'rollup-plugin-string';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default{
    input:'./src/index.ts',
    output:{
        file:'./example/build/HLJ.js',
        format:'iife',
        name:'HLJ',
        footer:'this.HLJ = HLJ;',
        sourcemap:true
    },
  plugins : [
        sourcemaps(),
        nodeResolve(),
        commonjs(),
        typescript(),
        string({
            include: [
                '**/*.frag',
                '**/*.vert',
            ],
        }),
        replace({
            __VERSION__: '1.0.1',
        }),
        transpile(),
    ],
}