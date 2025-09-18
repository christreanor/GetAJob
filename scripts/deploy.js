const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    dotfiles: true,
    repo: 'https://github.com/christreanor/GetAJob.git',
    dest: '.',
    add: true,
    message: `Auto-generated commit on ${new Date().toISOString()}`,
    silent: false,
    callback: function(err) {
      if (err) {
        console.error('Deployment error:', err);
      } else {
        console.log('Deployed successfully!');
      }
    }
  }
);