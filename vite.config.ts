import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(async ({command, mode}) => {
    return {
        plugins: [react()],
    }
})