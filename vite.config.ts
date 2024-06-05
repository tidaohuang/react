import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as constant from './src/constants/constant';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `${constant.BASE}/`
})
