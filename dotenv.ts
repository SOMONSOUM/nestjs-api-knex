declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DATABASE_URL: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_PORT: string;
    DATABASE_NAME: string;
    KNEX_DEBUG: string;
    JWT_SECRET: string;
    MYSQL_DEFAULT: string;
  }
}
