'use strict';

// GitHub Pages only serves real files, so deep links fall back to 404.html (HTTP 404).
// Emit a copy of index.html for every known route so they are served with HTTP 200.
// 404.html stays as the fallback for anything not listed here.

const { copyFileSync, mkdirSync, readFileSync } = require('fs');
const { join } = require('path');
const themes = require('devextreme-themebuilder/modules/themes').default;

const distDir = 'dist/devextreme-themebuilder-app';
const indexFile = join(distDir, 'index.html');

const menuRoutes = [...readFileSync('src/app/left-menu/left-menu.aliases.ts', 'utf8')
    .matchAll(/route:\s*'([^']+)'/g)].map((m) => m[1]);
if(!menuRoutes.length) throw new Error('No routes found in left-menu.aliases.ts');

const themeNames = [...new Set(themes.map((t) => t.name))];

const routes = [
    'master',
    'import',
    'import/bootstrap',
    'import/meta',
    'advanced',
    ...themeNames.flatMap((name) => [`preview/${name}`, `wizard/${name}`]),
    ...themes.flatMap(({ name, colorScheme }) => {
        const advanced = `advanced/${name}/${colorScheme}`;
        return [
            `master/${name}/${colorScheme}`,
            advanced,
            `${advanced}/datagrid`,
            `${advanced}/treelist`,
            `${advanced}/grids/datagrid`,
            `${advanced}/grids/treelist`,
            ...menuRoutes.map((route) => `${advanced}/${route}`)
        ];
    })
];

routes.forEach((route) => {
    const dir = join(distDir, route);
    mkdirSync(dir, { recursive: true });
    copyFileSync(indexFile, join(dir, 'index.html'));
});

copyFileSync(indexFile, join(distDir, '404.html'));

console.log(`Generated ${routes.length} route pages`);
