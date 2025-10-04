import { getAvailableIconNames } from './design-toolkit.esm.bundled.js';

const iconLibrary = document.getElementById('icon-library');
const safeNames = getAvailableIconNames();
iconLibrary.innerHTML = `<div>${safeNames.length} icons</div><div style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">` 
    +  safeNames.map(name => `
        <div style="border: 1px solid #ddd; padding: 10px; text-align: center;">
            <div style="margin-bottom: 10px;">${name}</div>
            <echo-icon name="${name}" size="large"></echo-icon>
        </div>
        `).join('') + '</div>';