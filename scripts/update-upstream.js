const { execSync } = require('child_process');

const upstreamRepo = 'git@github.com:marcelo-michels/mm-node-ts.git';

async function updateUpstream() {
  try {
    console.log('Updating upstream...');

    execSync(`git remote add upstream ${upstreamRepo} || true`);
    execSync('git fetch upstream');
    execSync('git merge upstream/main --allow-unrelated-histories');

    console.log('Upstream updated!');
  } catch (error) {
    console.error('Error updating upstream:', error);
  }
}

updateUpstream();
