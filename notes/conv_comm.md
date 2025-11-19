# Conventional Commits – Quick Reference

Conventional Commits are a standardized way to write commit messages. They improve readability, changelog generation, and versioning.

---

## **Format**

```
<type>(<scope>): <short summary>
<BLANK LINE>
[optional body]
<BLANK LINE>
[optional footer(s)]
```

* **type**: what kind of change it is (see types below)
* **scope** *(optional)*: the part of the code affected (e.g., `navbar`, `auth`)
* **short summary**: imperative, <50 characters
* **body** *(optional)*: explain **why** and **how**
* **footer** *(optional)*: breaking changes or issue references

---

## **Types**

| Type       | Description                                       |
| ---------- | ------------------------------------------------- |
| `feat`     | A new feature                                     |
| `fix`      | A bug fix                                         |
| `docs`     | Documentation only                                |
| `style`    | Code style changes (formatting, semicolons, etc.) |
| `refactor` | Code refactoring (no feature or bug change)       |
| `perf`     | Performance improvement                           |
| `test`     | Adding or fixing tests                            |
| `chore`    | Build process, tooling, or dependencies           |
| `ci`       | Continuous integration config                     |
| `build`    | Build system or external dependency changes       |

---

## **Examples**

### Feature

```
feat(navbar): add responsive mobile menu
```

### Bug Fix

```
fix(auth): correct JWT expiration bug
```

### Documentation

```
docs(readme): update installation instructions
```

### Refactor

```
refactor(homepage): simplify hero component layout
```

### Breaking Change

```
feat(api): change /user endpoint response format

BREAKING CHANGE: /user now returns 200 instead of 204
```

### Closing an Issue

```
fix(login): handle empty password field

Closes #42
```

---

## **Tips**

* Use **imperative mood**: "Add feature", not "Added feature"
* Keep **summary under 50 characters**
* Body can be multi-line; explain **why**, not just **what**
* Footers can reference **issues** or describe **breaking changes**
