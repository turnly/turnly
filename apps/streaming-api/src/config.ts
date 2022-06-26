export const serverOptions = Object.freeze({
  name: process.env.APP_NAME as string,
  port: parseInt(process.env.HTTP_PORT as string, 10),
})

export enum Channels {
  QUEUING = '/queuing',
  HELPDESK = '/helpdesk',
}
