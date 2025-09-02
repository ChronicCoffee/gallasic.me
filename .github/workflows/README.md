This directory contains GitHub Actions workflows for the project.

The canonical workflow for building and deploying the static Next.js export to GitHub Pages is `build-and-deploy.yml`.

Notes:
- This workflow uses `actions/upload-pages-artifact@v1` and `actions/deploy-pages@v1` to publish the `out/` export.
- Do not add workflows that use `actions/upload-artifact@v3` (deprecated) in this repository; use the Pages-specific uploader instead.
