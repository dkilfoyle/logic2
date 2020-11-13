npm run build
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:dkilfoyle/logic2.git master:gh-pages
