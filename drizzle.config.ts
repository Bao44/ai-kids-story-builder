import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    schema: "./config/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://accounts:RcH8OwNg3Sne@ep-icy-mouse-a5dzg4ub.us-east-2.aws.neon.tech/ai-kids-story-builder?sslmode=require'
    },
    verbose: true,
    strict: true
})