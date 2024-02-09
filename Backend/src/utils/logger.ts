import { createLogger, transports, format } from 'winston';

const logger = createLogger({
    transports: [new transports.File({
        dirname: "logs",
        filename: 'app.log'
    })],
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message, service }) => {
            return `[${timestamp}] ${level}: ${message}`;
        })
    )
})

export default logger;