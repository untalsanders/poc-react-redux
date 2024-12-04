let environmentConfig

switch (import.meta.env.MODE) {
    case 'production':
        environmentConfig = await import('./config.prod')
        break
    case 'development':
    default:
        environmentConfig = await import('./config.dev')
        break
}

export default environmentConfig.default
