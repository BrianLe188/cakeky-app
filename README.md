# PROJECT GUIDELINE

## 1. Branch convention

### 1.1. Name

`  <type>/<your_name>/<task_id>_<task_name_with_snake_case>`

example: dev/vietanh/1_login_screen

### 1.2. Pull request process

Currently in your branch.

1. `git stash`
   (Temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later on.)

2. `git checkout develop`

3. `git pull origin develop`

4. `git checkout <your_previous_branch>`

5. `git merge develop`

6. `git stash pop`

7. Proceed to resolve conflicts (if any). Contact the programmer whose code conflicts with yours

8. `git add .`

9. `git commit -m <your_commit>`

10. `git push origin <your_branch>`

## 2. Commit convention

`<type>(<optional_scrop>)<optional_breaking_change_with_!>: <description>`

2.1. Commit message with description

`feat: allow provided config object to extend other configs`

2.2. Commit message with ! to draw attention to breaking change

`feat!: send an email to the customer when a product is shipped`

2.3. Commit message with scope and ! to draw attention to breaking change

`feat(api)!: send an email to the customer when a product is shipped`

2.4. Valid commit types

- feat
- fix
- build
- docs
- style
- refactor
- perf
- chore
