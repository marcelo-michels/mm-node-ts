import { execSync } from 'child_process';

const upstreamRepo = 'git@github.com:marcelo-michels/node-ts.git';

async function updateUpstream() {
  try {
    console.log('Updating upstream...');

    execSync(`git remote add upstream ${upstreamRepo} || true`);
    execSync('git fetch upstream');
    execSync('git pull upstream main');
    execSync('git push origin master');

    console.log('Upstream updated!');
  } catch (error) {
    console.error('Error updating upstream:', error);
  }
}

updateUpstream();