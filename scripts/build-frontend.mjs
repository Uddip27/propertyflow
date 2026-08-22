import { execSync } from 'child_process';

try {
  execSync('pnpm -C artifacts/propertyflow run typecheck', { stdio: 'inherit' });
  execSync('pnpm -C artifacts/propertyflow run build', { stdio: 'inherit' });
} catch (e) {
  console.error('Build failed:', e);
  process.exit(1);
}
