## criar novo repositorio 

git init

## clonar novo repositorio

git clone /caminho/para/o/repositório

## enviar modificações para branch

git add .
git commit -m "comentários das alterações"
git push origin master

se estiver não estiver na branch principal, depois de de dar o comando acima usar 
git push 

## enviar arquivos da branch local para master

git checkout master
git merge nome_da_sua_branch
git push origin master

## atualizar a branch com a master

git pull origin master

## Criar branch 

git checkout -b "nome da sua branch"

git status

// entrar na branch

git checkout "nome da branch"





