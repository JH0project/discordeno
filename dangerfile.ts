import { danger, message, warn } from 'danger'

const commitType = ['build', 'chore', 'ci', 'docs', 'style', 'refactor', 'perf', 'test']

if (!commitType.find((type) => danger.github.pr.title.startsWith(type))) {
  message(`This pull request title should start with either ${commitType.join(', ')}.`)
  message(`This with either ${commitType.join(', ')}.`)
}

if (!danger.github.pr.assignee) {
  warn('This pull request needs an assignee.')
  warn('This pull request needs an 3fawf.')
}
