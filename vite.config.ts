import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pluginChecker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginChecker({ typescript: true }), eslint()],
})
