# Drive-rename Contributing Guide

Hi! We're excited that you're interested in contributing to Drive-rename. This guide will help you get started.

## Repo setup
To develop locally, fork the drive-rename repository and clone it in your local machine.

To develop and test the extension:
1. Run `pnpm i` in the root folder.
2. Run `pnpm dev` to start the development server.
3. Click `install` in the extension popup to install the extension in your browser.

## Points you need to think about
- The Container: Where to inject the rename button
- When to show the rename button
- When to pull the file list
- File list api: How to get the file list
- Rename api: How to rename the file

## Things you need to implement or update
- Implement a new provider in `providers/xxx.ts`
- Update `README.md` with the new provider
