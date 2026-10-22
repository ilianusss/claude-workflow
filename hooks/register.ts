import type { Register } from 'claude-code'

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'workflow',
      description: 'Status of this repo\'s workflows, or new, continue, next, pause, done, abandon, adopt.',
      argumentHint: '[new|continue|next|pause|unlock|done|abandon|adopt|all]',
    })
    return next(e)
  })

  on('command.run', { command: 'workflow' }, () => ({
    text: 'workflow: skeleton only, nothing is built yet.',
  }))
}
